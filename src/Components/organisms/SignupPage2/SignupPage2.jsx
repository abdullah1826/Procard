import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SapidLogo from "../../../Assets/Images/kindlogo.png";
import InputFieldOutlined from "../../Atoms/InputField/InputFieldOutlined";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  ref,
  set,
  getDatabase,
  child,
  get,
  update,
  onValue,
} from "firebase/database";
import { auth, db } from "../../Services/Firebase/config";

import { toast, ToastContainer } from "react-toastify";
import AlertMessage from "../../Atoms/Dialog/AlertMessage";
import procardlogo from "../../../Assets/Images/procard.png";
import "./SignupPage2.css";
export default function SignupPage2() {
  const [showpassword, setShowpassword] = useState({
    input1: true,
    input2: true,
  });
  const [btnLoading, setbtnLoading] = useState(false);
  const [userData, setUserData] = useState({
    full_name: "",
    user_name: "",
    email: "",
    password: "",
  });
  const [firebaseUserData, setFirebaseUserData] = useState();
  const [showValidationAlert, setShowValidationAlert] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationAlert, setValidationAlert] = useState({
    title: "",
    text: "",
    errorType: "",
  });

  const { t } = useTranslation();
  const location = useLocation();
  const { tag } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const dbRef = ref(db, "User");
    let users = [];

    onValue(dbRef, async (snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          users.push(childSnapshot.val());
        });
        setFirebaseUserData(users);
        checkingExistingUserNameFromRealTimeDB(users, userData.user_name);
      } else {
        console.log("No data available");
      }

      {
        /* const data = await snapshot.val();
      console.log(data);
      setusersdata(Object.values(data));*/
      }
    });

    {
      /* get(child(dbRef)).then((snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          users.push(childSnapshot.val());
        });
        setFirebaseUserData(users);
        checkingExistingUserNameFromRealTimeDB(users, userData.user_name);
      } else {
        console.log('No data available');
      }
    });*/
    }
  }, []);

  const checkingExistingUserNameFromRealTimeDB = (users, userName) => {
    if (users?.length > 0) {
      const exists = users.some((item) => item.username === userName);
      if (exists) {
        return true;
      } else {
        return false;
      }
    }
  };

  const validationShowAlertMessage = (showAlert, errorType, title, text) => {
    setValidationAlert({
      ...validationAlert,
      title: title,
      text: text,
      errorType: errorType,
    });
    setShowValidationAlert(showAlert);
  };

  const handleSignupWithEmail = () => {
    try {
      if (!btnLoading) {
        setbtnLoading(true);
        if (
          userData.full_name !== "" &&
          userData.user_name !== "" &&
          userData.email !== "" &&
          userData.password !== "" &&
          confirmPassword !== ""
        ) {
          if (confirmPassword !== userData.password) {
            toast.error(t("cofirmpassword"));
            setTimeout(() => {
              setbtnLoading(false);
            }, 2000);
          } else {
            const emailRegEx =
              /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
            if (emailRegEx.test(userData.email)) {
              const result = checkingExistingUserNameFromRealTimeDB(
                firebaseUserData,
                userData.user_name
              );
              if (!result) {
                createUserWithEmailAndPassword(
                  auth,
                  userData.email,
                  userData.password
                )
                  .then((response) => {
                    localStorage.setItem("provider", "emailpass");
                    setTimeout(() => {
                      setbtnLoading(false);
                    }, 2000);
                    localStorage.setItem("sapiduserid", response.user.uid);
                    set(ref(db, "User/" + response.user.uid), {
                      address: "",
                      bio: "",
                      directMode: false,
                      dob: "",
                      email: response.user.email,
                      fcmToken: "",
                      gender: "",
                      id: response.user.uid,
                      language: "es",
                      isDeleted: false,
                      logoUrl: "",
                      name: userData.full_name,
                      phone: "",
                      platform: "web",
                      tagUid: "",
                      profileOn: 1,
                      profileUrl: "",
                      timestamp: "",
                      theme: "theme1",
                      username: userData.user_name,
                      cardColor: "#4FA8ED",
                    }).then(() => {
                      if (tag) {
                        const dbRef = ref(getDatabase());
                        get(child(dbRef, `/Tag`))
                          .then((snapshot) => {
                            if (snapshot.exists()) {
                              let allTags = snapshot.val();
                              let tagsArray = Object.values(allTags);
                              let existingTag = tagsArray.find(
                                (elm) => elm.tagId === tag
                              );
                              if (existingTag) {
                                update(ref(db, `Tag/` + existingTag.id), {
                                  status: true,
                                  username: userData.user_name,
                                }).then(() => {
                                  update(ref(db, "User/" + response.user.uid), {
                                    tagUid: tag,
                                  });
                                });
                              }
                            } else {
                              console.log("No data available");
                            }
                          })
                          .catch((error) => {
                            console.error(error);
                          });
                      }
                    });
                    localStorage.setItem("email", userData.email);
                    localStorage.setItem("pass", userData.password);
                    let lange = localStorage.getItem("lang");
                    if (!lange) {
                      localStorage.setItem("lang", "sp");
                    }
                    toast.success(t("signupsuccess"));
                    const user = response.user;
                    updateProfile(user, {
                      displayName: userData.full_name,
                    });
                    setTimeout(() => {
                      navigate("/home");
                    }, 2000);
                  })
                  .catch((error) => {
                    setTimeout(() => {
                      setbtnLoading(false);
                    }, 2000);
                    if (
                      error.message ===
                      "Firebase: Error (auth/email-already-in-use)."
                    ) {
                      toast.warn(t("emailAlreadyExists"));
                    } else if (
                      error.message ===
                      "Firebase: Password should be at least 6 characters (auth/weak-password)."
                    ) {
                      toast.error(t("passwordInstruc"));
                    }
                  });
              } else {
                setTimeout(() => {
                  setbtnLoading(false);
                }, 2000);
                toast.warn(t("useralreadyexist"));
              }
            } else {
              setTimeout(() => {
                setbtnLoading(false);
              }, 2000);
              validationShowAlertMessage(
                true,
                "alert",
                t("Alert"),
                t("validEmailError")
              );
            }
          }
        } else {
          setTimeout(() => {
            setbtnLoading(false);
          }, 2000);
          validationShowAlertMessage(
            true,
            "alert",
            t("Error!"),
            t("makeSureFieldsFilled")
          );
        }
      }
    } catch (error) {
      setTimeout(() => {
        setbtnLoading(false);
      }, 2000);
      toast.error(error.message);
    }
  };

  const handleTextFieldOnChange = (e, fieldName) => {
    const { value } = e.target;
    setUserData({ ...userData, [fieldName]: value });
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="siginpage2">
        {/* <div style={{ width: "85%", marginTop: "25px" }}>
          <Link to="/loginpage2">
            <ArrowBackIosIcon style={{ color: "black" }} />
          </Link>
        </div> */}
        <img
          width="148px"
          height="110px"
          style={{ marginTop: "30px" }}
          src={procardlogo}
        />
        <div className="Textsigin">
          <h1>The Networking Card of the Future!</h1>
          <p>Get started with Africa's #1 digital business card platform</p>
        </div>
        <div className="input-sigin2">
          <input
            type="text"
            placeholder="Full Name"
            value={userData.full_name}
            onChange={(e) => handleTextFieldOnChange(e, "full_name")}
          />
          <input
            type="text"
            placeholder="Enter Username"
            value={userData.user_name}
            onChange={(e) => handleTextFieldOnChange(e, "user_name")}
          />
          <input
            type="Email"
            placeholder="Enter Email"
            onChange={(e) => handleTextFieldOnChange(e, "email")}
          />
        </div>
        <span className="password-ii">
          <input
            type={showpassword.input1 === true ? "password" : "text"}
            value={userData.password}
            placeholder="Enter Password"
            onChange={(e) => handleTextFieldOnChange(e, "password")}
          />
          {showpassword.input1 === true ? (
            <RemoveRedEyeIcon
              onClick={() =>
                setShowpassword({ ...showpassword, input1: false })
              }
            />
          ) : (
            <VisibilityOffIcon
              onClick={() => setShowpassword({ ...showpassword, input1: true })}
            />
          )}
        </span>
        <span className="password-ii">
          <input
            type={showpassword.input2 === true ? "password" : "text"}
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {showpassword.input2 === true ? (
            <RemoveRedEyeIcon
              onClick={() =>
                setShowpassword({ ...showpassword, input2: false })
              }
            />
          ) : (
            <VisibilityOffIcon
              onClick={() => setShowpassword({ ...showpassword, input2: true })}
            />
          )}
        </span>
        <button id="buttonn2" onClick={handleSignupWithEmail}>
          Signup
        </button>
        <br />
        {/* <p style={{ marginTop: "50px", marginBottom: "20px" }}>
          Already have an account?{" "}
          <Link
            to="/signinpage2"
            style={{ color: "black", fontWeight: "bold" }}
          >
            Sign in
          </Link>
        </p> */}
      </div>
      <ToastContainer position="top-center" autoClose={1000} />
      <AlertMessage
        showAlert={showValidationAlert}
        hideAlert={() => setShowValidationAlert(false)}
        confirmPressed={() => setShowValidationAlert(false)}
        title={validationAlert.title}
        text={validationAlert.text}
        errorType={validationAlert.errorType}
        showCancelButton={false}
        showConfirmButton={true}
        confirmButtonText={t("Close")}
      />
    </div>
  );
}
