import React from "react";
import "../InputField/InputFieldOutlined.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const InputFieldOutlined = ({
  placeholderText,
  textType,
  value,
  onChangeTextField,
  name,
}) => {
  let [showPass, setShowPass] = useState(false);
  return (
    <div className="input_field_outlined_main">
      {textType === "text" ? (
        <input
          type={
            textType == "text"
              ? "text"
              : textType == "password"
              ? "password"
              : ""
          }
          name={name}
          value={value}
          onChange={(e) => onChangeTextField(e)}
          placeholder={placeholderText}
          className="input_field_css_outlined"
        />
      ) : (
        <>
          <input
            type={showPass ? "text" : "password"}
            name={name}
            value={value}
            onChange={(e) => onChangeTextField(e)}
            placeholder={placeholderText}
            className="input_field_css_outlined_psd"
          />
          {showPass ? (
            <div
              onClick={() => setShowPass(!showPass)}
              style={{ cursor: "pointer", height: "50%" }}
            >
              <VisibilityOffIcon />
            </div>
          ) : (
            <div
              onClick={() => setShowPass(!showPass)}
              style={{ cursor: "pointer", height: "50%" }}
            >
              <VisibilityIcon />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default InputFieldOutlined;
