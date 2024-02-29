import React from "react";
// "start": "react-scripts start",
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./Screens/SplashScreen/SplashScreen";
import SignupOptionsScreen from "./Screens/SignupOptionsScreen/SignupOptionsScreen";
import SignupScreen from "./Screens/SignupScreen/SignupScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import ForgotPasswordScreen from "./Screens/ForgotPasswordScreen/ForgotPasswordScreen";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import EditHomeScreen from "./Screens/EditHomeScreen/EditHomeScreen";
import QRCodeScreen from "./Screens/QRCodeScreen/QRcodeScreen";
import ActivateSapidScreen from "./Screens/ActivateSapidScreen/ActivateSapidScreen";
import Splash2 from "./Components/organisms/Splash2/Splash2";
import SplashScreen2 from "./Screens/SplashScreen2/SplashScreen2";
import SignupWithTag from "./Screens/SignupWithTag/SignupWithTag";
import FinalProfile from "./Components/organisms/FinalProfile/FinalProfile";
import LoginPage2 from "./Components/organisms/LoginPage2/LoginPage2";
import { Login } from "@mui/icons-material";
import SignupPage2 from "./Components/organisms/SignupPage2/SignupPage2";
import SigninPage2 from "./Components/organisms/SigninPage2/SigninPage2";
import ForogotPassword2 from "./Components/organisms/ForogotPassword2/ForogotPassword2";



function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage2/>} />
          {/*<Route exact path="/Signoption" element={<SplashScreen />} />*/}
          <Route
            exact
            path="/signupwithtag/:tagId"
            element={<SignupWithTag />}
          />
          {/* <Route exact path="/signup/with" element={<SignupOptionsScreen />} /> */}
          <Route exact path="/signin" element={<LoginScreen />} />
          <Route
            exact
            path="/password/forgot"
            element={<ForgotPasswordScreen />}
          />

          <Route path="/signup">
            <Route path=":tagId" element={<SignupScreen />} />
            <Route path="" element={<SignupScreen />} />
          </Route>
          {/* <Route exact path="/signup">
            <Route path=":tagId?" element={<SignupScreen />} />
          </Route> */}
          <Route exact path="/home" element={<HomeScreen />} />
          <Route exact path="/edit/home" element={<EditHomeScreen />} />
          <Route exact path="/scan/your/code" element={<QRCodeScreen />} />
          <Route exact path="/finalprofile" element={<FinalProfile />} />
          <Route exact path="/loginpage2" element={<LoginPage2 />} />
          <Route exact path="/signuppage2" element={<SignupPage2 />} />
          <Route exact path="/signinpage2" element={<SigninPage2 />} />
          <Route exact path="/forgotpassword2" element={<ForogotPassword2 />} />
          {/* <Route
            exact
            path="/activate/sapid"
            element={<ActivateSapidScreen />}
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
