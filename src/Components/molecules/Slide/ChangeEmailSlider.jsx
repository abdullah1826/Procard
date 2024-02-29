import React from "react";
import "../Slide/Slide.css";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import { Dialog, TextField } from "@mui/material";
import SapidLogo from "../../../Assets/Images/kindlogo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { child, get } from "firebase/database";
import img1 from "../Slide/procard.png";
const ChangeEmailSlider = ({
  showSlide,
  Setopendrawer,
  hideSlide,
  submit,
  changeEmailTextOnChange,
  newEmail,
  theme,
}) => {
  const { t } = useTranslation();
  // useEffect(() => {
  //   Setopendrawer();
  // }, []);

  // const [newEmail, setNewEmail] = useState("");

  // const emailChangetextFieldOnChange = (e) => {
  //   setNewEmail(e.target.value);
  // };

  // const handleChangeEmailSubmit = (inputData) => {
  //   const emailRegEx =
  //     /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  //   if (emailRegEx.test(newEmail)) {
  //     let usersArray = [];
  //     get(child(dbRef, `User`)).then((response) => {
  //       const users = response?.val();
  //       const exists = Object.values(users).some(
  //         (item) => item.email === inputData
  //       );
  //       if (exists) {
  //         validationShowAlertMessage(
  //           true,
  //           "alert",
  //           t("Alert"),
  //           t("emailAlreadyExists")
  //         );
  //       } else {
  //         const userId = auth?.currentUser?.uid;
  //         updateEmail(auth.currentUser, inputData).then(() => {
  //           update(ref(db, "User/" + userId), {
  //             email: inputData,
  //           });
  //           get(child(dbRef, `User/${userId}`)).then((response) => {
  //             dispatch(loginUserObj(response.val()));
  //           });
  //           toast.success(t("emailUpdatedSuccess"));
  //           setNewEmail("");
  //           setShowChangeEmailSlider(false);
  //         });
  //       }
  //     });
  //   } else {
  //     validationShowAlertMessage(
  //       true,
  //       "alert",
  //       t("Alert"),
  //       t("validEmailError")
  //     );
  //   }
  // };

  return (
    // <Dialog open={showSlide} onClose={hideSlide}>
    <Slide
      in={showSlide}
      direction="up"
      timeout={{ appear: 500, enter: 500, exit: 500 }}
      // style={{   backgroundColor: "rgba(255, 255, 255, 0.4)", WebkitBackdropFilter: "blur(5px)", backdropFilter: "blur(5px)" }}
    >
      <div
        className="change_emailll_slide_main_div"
        style={{
          backgroundColor: theme === "theme1" ? "white" : "black",
          boxShadow:
            theme === "theme1"
              ? "0px -5px 5px 0px rgba(0, 0, 0, 0.25)"
              : "0 0 10px rgba(255, 255, 255, 0.5)",
          color: theme === "theme1" ? "black" : "white",
        }}
      >
        <div className="change_password_title_and_icon_main">
          <div onClick={hideSlide}>
            <KeyboardArrowDownIcon
              style={{
                position: "absolute",
                right: "20px",
                fontSize: "2rem",
                color: theme === "theme1" ? "black" : "white",
              }}
            />
          </div>
        </div>
        <div className="change_password_Sapid_logo_main">
          <img src={img1} className="change_password_sapid_logo_css" />
        </div>
        <div
          className="reset_password_div"
          style={{ color: theme === "theme1" ? "black" : "white" }}
        >
          {t("enterNewEmail")}
        </div>
        <div className="change_password_text_field">
          <TextField
            label={theme === "theme1" ? t("Email") : null}
            variant="outlined"
            value={newEmail}
            sx={{ boxShadow: 3, backgroundColor: "#fff", color: "black" }}
            style={{ height: "100%", width: "83%", color: "black" }}
            size="small"
            className="change_emaill_input_field_css"
            onChange={(e) => changeEmailTextOnChange(e)}
          />
        </div>
        <div className="change_password_save_button">
          <Button
            variant="contained"
            onClick={() => submit(newEmail)}
            style={{
              background:
                "linear-gradient(89.83deg, #0672A1 0.11%, #BB4985 99.85%)",
              borderRadius: "10px",
              width: "85%",
              marginTop: "1rem",
              height: "2.5rem",
            }}
          >
            {t("Confirm")}
          </Button>
        </div>
      </div>
    </Slide>
    // </Dialog>
  );
};

export default ChangeEmailSlider;
