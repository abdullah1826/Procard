import React, { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import "../SigninPage2/SigninPage2.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SapidLogo from "../../../Assets/Images/kindlogo.png";
import leaf7 from "../../../Assets/Images/leaf7.png";
import leaf8 from "../../../Assets/Images/leaf8.png";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useLocation, useNavigate } from "react-router-dom";
import InputFieldOutlined from "../../Atoms/InputField/InputFieldOutlined";
import Button from "../../Atoms/Button/Button";
import { auth, db, provider } from "../../Services/Firebase/config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { isUserLogin, loginUserObj } from "../../../Redux/Login/actions";
import { updateProfile } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import AlertMessage from "../../Atoms/Dialog/AlertMessage";
import { getDatabase, ref, child, get, update } from "firebase/database";
import { loginUserInfoSelector } from "../../../Redux/Login/selectors";

export default function SigninPage2() {
  const [showpassword, setShowpassword] = useState(true);
  const [btnLoading, setbtnLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [showValidationAlert, setShowValidationAlert] = useState(false);
  const [validationAlert, setValidationAlert] = useState({
    title: "",
    text: "",
    errorType: "",
  });
  const handleTextFieldOnChange = (e, fieldName) => {
    const { value } = e.target;
    setUserData({ ...userData, [fieldName]: value });
  };
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const loginUserData = useSelector(loginUserInfoSelector);

  const validationShowAlertMessage = (showAlert, errorType, title, text) => {
    setValidationAlert({
      ...validationAlert,
      title: title,
      text: text,
      errorType: errorType,
    });
    setShowValidationAlert(showAlert);
  };

  const signInPressFunc = () => {
    if (!btnLoading) {
      setbtnLoading(true);
      if (userData?.email != "" && userData?.password != "") {
        const emailRegEx =
          /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (emailRegEx.test(userData?.email)) {
          signInWithEmailAndPassword(auth, userData?.email, userData?.password)
            .then((response) => {
              console.log(response, "sing in user response");
              localStorage.setItem("provider", "emailpass");
              if (response?.user?.uid) {
                localStorage.setItem("sapiduserid", response?.user?.uid);
                const user = response?.user;
                updateProfile(user, {
                  displayName: userData?.full_name,
                });

                dispatch(isUserLogin(response?.user));
                toast.success(t("signinwithEmail"));
                setTimeout(() => {
                  setbtnLoading(false);
                }, 2000);
                localStorage.setItem("email", userData?.email);
                localStorage.setItem("pass", userData?.password);
                // localStorage.setItem("usid", response?.user?.uid)
                let lange = localStorage.getItem("lang");
                if (!lange) {
                  localStorage.setItem("lang", "sp");
                }
                setTimeout(() => {
                  navigate("/home");
                }, 1000);
              }
            })
            .catch((error) => {
              // toast(t("notValidEmail"));
              setTimeout(() => {
                setbtnLoading(false);
              }, 2000);
              if (
                error.message ===
                "Firebase: Error (auth/invalid-login-credentials)."
              ) {
                toast.error(t("Wrongpassword"));
              } else if (
                error.message === "Firebase: Error (auth/user-not-found)."
              ) {
                toast.error(t("Usernotfound"));
              }
              console.log(error.message);
            });
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

      let lange = localStorage.getItem("lang");
      if (!lange) {
        localStorage.setItem("lang", "sp");
      }
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="siginpage2">
        <div style={{ width: "85%", marginTop: "25px" }}>
          <Link to="/loginpage2">
            <ArrowBackIosIcon style={{ color: "black" }} />
          </Link>
        </div>
        <img
          width="148px"
          height="110px"
          style={{ marginTop: "30px" }}
          src="images/procard.png"
        />
        <div className="Textsigin">
          <h1>The Networking Card of the Future!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cursus mauris in sodales
            aliquet augue bibendum velit.
          </p>
        </div>
        <div className="input-sigin2">
          <input
            type="Email"
            placeholder="Enter Email"
            onChange={(e) => handleTextFieldOnChange(e, "email")}
            value={userData?.email}
          />
        </div>
        <span className="password-ii">
          <input
            type={showpassword === true ? "password" : "text"}
            placeholder="Enter Password"
            onChange={(e) => handleTextFieldOnChange(e, "password")}
            value={userData?.password}
          />
          {showpassword === true ? (
            <RemoveRedEyeIcon onClick={() => setShowpassword(false)} />
          ) : (
            <VisibilityOffIcon onClick={() => setShowpassword(true)} />
          )}
        </span>
        <Link
          to="/forgotpassword2"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "79%",
            color: "black",
          }}
        >
          Forgot Password?
        </Link>
        <button onClick={signInPressFunc} id="buttonn2">
          Login
        </button>
        {/* <p style={{marginTop:'50px'}}>Don’t have an account? <Link to='/signuppage2' style={{color:'black',fontWeight:'bold'}}>Sign up</Link></p> */}
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
