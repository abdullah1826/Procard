import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { useSSR, useTranslation } from "react-i18next";
import AlertMessage from "../../Atoms/Dialog/AlertMessage";
import { useState } from 'react';

export default function ForogotPassword2() {
  const { t } = useTranslation();
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [showValidationAlert, setShowValidationAlert] = useState(false);
  const [validationAlert, setValidationAlert] = useState({
    title: "",
    text: "",
    errorType: "",
  });

  const handleOnChange = (e) => {
    setEmail(e.target.value);
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

  const handleResetPasswordFunc = () => {
    try {
      const emailRegEx =
        /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
      if (emailRegEx.test(email)) {
        sendPasswordResetEmail(auth, email)
          .then(() => {
            toast.success(t("checkEmailResetPassword"));
            setTimeout(() => {
              // navigate(-1)
            }, 3000);
            setEmail("");
          })
          .catch((error) => {
            toast(error.message);
            console.log(
              error.conde,
              "erorr code",
              error.message,
              "error.message"
            );
          });
      } else {
        validationShowAlertMessage(
          true,
          "alert",
          t("Alert"),
          t("validEmailError")
        );
      }
    } catch (error) {
      // console.log(error, "this is the console of error inside try catch error");
    }
  };
  return (
    <div style={{display:"flex",justifyContent:'center'}}>
    <div className='siginpage2' >
    <div style={{width:'85%', marginTop:'25px'}}><Link to="/signinpage2"><ArrowBackIosIcon style={{color:'black'}}/></Link></div>
    <img width="148px" height='110px' style={{marginTop:'30px'}} src='images/procard.png'/>
    <div className='Textsigin'>
    <h1>The Networking Card of the Future!</h1>
    <p>Lorem ipsum dolor sit amet consectetur. Cursus mauris in sodales aliquet augue bibendum velit.</p>
    </div>
    <div className='input-sigin2'>
    <input type='Email' value={email} onChange={(e) => handleOnChange(e)} placeholder='Enter Email'/>
    </div>
    <button id='buttonn2' onClick={handleResetPasswordFunc}>Reset</button>
    </div>
    <ToastContainer position="top-center" autoClose={1500} />
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
  )
}
