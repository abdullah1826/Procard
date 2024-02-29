import React, { useState } from "react";
import "../Slide/Slide.css";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Dialog, TextField } from "@mui/material";
import { ClipLoader } from "react-spinners";
import {
  openSocialApp,
  returnIcons,
  returnPlaceHolderNames,
  returnPngIcons,
  returnSocialImages,
} from "../../Services/utils/Utils";
import { useTranslation } from "react-i18next";

const SocialSlider = ({
  showSlide,
  hideSlide,
  submit,
  data,
  questionMarkPress,
  socialSliderTextFieldOnChange,
  inputData,
  openAppFunc,
  deleteSocialLink,
  btnLoading,
  cardColor,
  theme,
  iStyle,
}) => {
  console.log(data);
  const { t } = useTranslation();
  let returnName = (name) => {
    if (name) {
      if (name === "Phone") {
        return t("phone");
      } else if (name === "Website") {
        return t("website");
      } else if (name === "Custom Link") {
        return t("cstmLink");
      } else {
        return name;
      }
    }
  };
  return (
    // <Dialog open={showSlide} onClose={hideSlide}>
    <Slide
      in={showSlide}
      direction="up"
      timeout={{ appear: 500, enter: 500, exit: 500 }}
    >
      <div
        className="slide_main_div"
        style={{
          color: theme === "theme1" ? "black" : "white",
          backgroundColor: theme === "theme1" ? "white" : "black",
          // border: "1px solid white",
          boxShadow:
            theme === "theme1"
              ? "0px -5px 5px 0px rgba(0, 0, 0, 0.25)"
              : "0 0 10px rgba(255, 255, 255, 0.5)",
        }}
      >
        <div className="title_and_icon_main">
          <div>
            <h3 style={{ color: theme === "theme1" ? "black" : "white" }}>
              {returnName(data?.name)}
            </h3>
          </div>
          <div onClick={hideSlide}>
            <KeyboardArrowDownIcon
              style={{
                position: "absolute",
                right: "20px",
                fontSize: "2.5rem",
                color: theme === "theme1" ? "black" : "white",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <div className="social_icon_slider_css">
          {iStyle === "style1" ? (
            <img
              src={returnPngIcons(data?.name)}
              alt=""
              style={{ height: "5.9rem", width: "5.9rem", marginTop: "40px" }}
            />
          ) : (
            <div
              className="icon__main"
              style={{
                backgroundColor: cardColor,
                borderRadius: iStyle === "style2" ? "10px" : "100%",
              }}
            >
              {returnIcons(data?.name, 50)}
            </div>
          )}
        </div>
        <div className="inputFiled_with_question_mark_main">
          <TextField
            label={theme === "theme1" ? returnPlaceHolderNames(data) : null}
            variant="outlined"
            value={inputData}
            sx={{ boxShadow: 3 }}
            type={
              returnPlaceHolderNames(data) === "Phone Number"
                ? "number"
                : "text"
            }
            style={{ height: "100%", width: "83%", color: "#07074E" }}
            size="small"
            className="input_field__csss"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => socialSliderTextFieldOnChange(e)}
          />
          <div className="question_main_icon_div_main">
            <QuestionMarkIcon
              style={{ color: "white" }}
              onClick={() => questionMarkPress()}
            />
          </div>
        </div>
        <div className="cancel_and_save_btn_main_inSlider">
          <a
            className="bth_button_inSlider"
            target="_blank"
            href={openSocialApp(data, inputData)}
          >
            {t("open")}
          </a>

          <div
            className="bth_button_inSlider"
            onClick={() => deleteSocialLink(data)}
          >
            {t("delete")}
          </div>
        </div>
        <div className="ef-button--container">
          <button
            // variant="contained"
            onClick={() => submit(data)}
            style={{
              background:
                "linear-gradient(89.83deg, #0672A1 0.11%, #BB4985 99.85%)",
              borderRadius: "10px",
              width: "80%",
              marginTop: "1.5rem",
              fontSize: "15px",
              boxShadow: "2px 2px 2px 2px grey",
              cursor: "pointer",
              border: "none",
              fontFamily: "MadeOuterSansLight, sans-serif",
            }}
          >
            {btnLoading ? <ClipLoader color="white" /> : t("confirm")}
            {/* {} */}
          </button>
        </div>
      </div>
    </Slide>
    // </Dialog>
  );
};

export default SocialSlider;
