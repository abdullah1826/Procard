import React, { useState } from "react";
import "../Slide/Slide.css";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import { Checkbox, Dialog, FormControlLabel, TextField } from "@mui/material";
import SapidLogo from "../../../Assets/Images/kindlogo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTranslation } from "react-i18next";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useContext } from "react";
import { AppContext } from "../../../context/newContext";
import img1 from "../Slide/procard.png";

const ChangePasswordSlider = ({
  showSlide,
  hideSlide,
  changePasswordSliderTextOnChange,
  submit,
  password,
  setconfirmpass,
  confirmpass,
  theme,
}) => {
  let { sociallogin, setsociallogin } = useContext(AppContext);

  let provider = localStorage.getItem("provider");
  console.log(provider);

  // let actualSubmit = () => {
  //   if (provider === 'emailpass') {
  //     return submit(password)
  //   }
  //   else {
  //     return submit2(password)
  //   }
  // }
  let loerCase = (text) => {
    return text.toLowerCase();
  };
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(true);
  const passwordHide = () => {
    password.old_password = "";
    password.confirmPassword = "";
  };

  return (
    // <Dialog open={showSlide} onClose={hideSlide}>
    <Slide
      in={showSlide}
      direction="up"
      timeout={{ appear: 500, enter: 500, exit: 500 }}
    >
      <div
        className="change_password_slide_main_div"
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
          className="_new_password_div"
          style={{ color: theme === "theme1" ? "black" : "white" }}
        >
          {/* {t("enternewpassword")} */}
          Enter your Email to change password
        </div>
        <div className="change_password_text_field">
          <TextField
            label={"Enter your email"}
            variant="outlined"
            type={"text"}
            // name="old_password"
            value={password}
            sx={{ boxShadow: 3, backgroundColor: "#fff", color: "#8C6766" }}
            style={{ height: "100%", width: "83%", color: "#8C6766" }}
            size="small"
            className="change_password_input_field_css"
            onChange={(e) => changePasswordSliderTextOnChange(e)}
          />

          {/* <TextField
            label={t("enternewpass")}
            name="confirmPassword"
            variant="outlined"
            type={showPassword ? "password" : "text"}
            value={password?.confirmPassword}
            sx={{ boxShadow: 3, backgroundColor: "#fff" }}
            style={{ height: "100%", width: "83%", marginTop: "14px" }}
            size="small"
            className="change_password_input_field_css"
            onChange={(e) => changePasswordSliderTextOnChange(e)}
          />
          <TextField
            label={t("Confirm Password")}
            variant="outlined"
            type={showPassword ? "password" : "text"}
            value={confirmpass}
            sx={{ boxShadow: 3, backgroundColor: "#fff" }}
            style={{ height: "100%", width: "83%", marginTop: "14px" }}
            size="small"
            className="change_password_input_field_css"
            onChange={(e) => {
              setconfirmpass(e.target.value);
              changePasswordSliderTextOnChange(e);
            }}
          /> */}
          {/* <div style={{ display: "flex", marginTop: "10px", width: "80%" }}>
            <FormControlLabel
              checked={!showPassword}
              control={
                <Checkbox
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    color: theme === "theme1" ? "black" : "white",
                  }}
                />
              }
              label={t("showpassword")}
              style={{
                width: "auto",
                color: theme === "theme1" ? "black" : "white",
              }}
            />
          </div> */}
        </div>
        <div className="change_passwordd_save_button">
          <Button
            variant="contained"
            onClick={() => {
              return submit(password);
            }}
            style={{
              background:
                "linear-gradient(89.83deg, #0672A1 0.11%, #BB4985 99.85%)",
              borderRadius: "10px",
              width: "85%",
              marginTop: "30px",
              // marginBottom: "2px",
              height: "2.5rem",
              // marginBottom: "10px",
            }}
          >
            Send Email
          </Button>
        </div>
      </div>
    </Slide>
    // </Dialog>
  );
};

export default ChangePasswordSlider;
