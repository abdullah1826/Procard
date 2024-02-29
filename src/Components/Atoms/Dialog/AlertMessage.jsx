import React from "react";
import { Alert } from "@mui/material";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { PaperProps } from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { Box } from "@mui/material";
import PriorityHighOutlinedIcon from "@mui/icons-material/PriorityHighOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { useTranslation } from "react-i18next";
// import { t } from "i18next";

const CustomAlert = ({
  showAlert,
  hideAlert,
  title,
  text,
  errorType,
  showCancelButton,
  showConfirmButton,
  confirmButtonText,
  confirmPressed,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <Dialog
      open={showAlert}
      keepMounted
      onClose={hideAlert}
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{ style: { width: "350px", paddingTop: "20px" } }}
    >
      <Box
        style={{
          height: "3.5rem",
          width: "4rem",
          display: "flex",
          alignSelf: "center",
          borderRadius: "50%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "50%",
            border:
              errorType == "error"
                ? "3px solid black"
                : errorType == "success"
                ? "3px solid black"
                : errorType == "warning"
                ? "3px solid black"
                : errorType == "alert"
                ? "3px solid black"
                : "",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {errorType == "error" ? (
            <ClearOutlinedIcon fontSize="large" style={{ color: "black" }} />
          ) : errorType == "success" ? (
            <CheckOutlinedIcon fontSize="large" style={{ color: "black" }} />
          ) : errorType == "warning" ? (
            <PriorityHighOutlinedIcon
              fontSize="large"
              style={{ color: "black" }}
            />
          ) : errorType == "alert" ? (
            <PriorityHighOutlinedIcon
              fontSize="large"
              style={{ color: "black" }}
            />
          ) : (
            ""
          )}
        </Box>
      </Box>
      <DialogTitle
        style={{
          display: "flex",
          alignSelf: "center",
          fontFamily: "MadeOuterSansLight, sans-serif",
          color: "black",
        }}
      >
        {title}
      </DialogTitle>
      <DialogContent
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <DialogContentText
          id="alert-dialog-slide-description"
          style={{
            
            color: "black",
          }}
        >
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions
        style={{ display: "flex", alignSelf: "center", marginBottom: "10px" }}
      >
        {showCancelButton && (
          <Button
            onClick={hideAlert}
            style={{
              width: "7rem",
              height: "20%",
              background:'linear-gradient(89.83deg, #0672A1 0.11%, #BB4985 99.85%)',
              color: "white",
              fontFamily: "MadeOuterSansLight, sans-serif",
            }}
          >
            {t("Cancel")}
          </Button>
        )}
        {showConfirmButton && (
          <Button
            onClick={confirmPressed}
            style={{
              width: "7rem",
              height: "20%",
              color: "white",
              background:'linear-gradient(89.83deg, #0672A1 0.11%, #BB4985 99.85%)',
              fontFamily: "MadeOuterSansLight, sans-serif",
            }}
          >
            {confirmButtonText ?? "Ok"}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default CustomAlert;
