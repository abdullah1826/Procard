import React from "react";
import "../LoginPage2/LoginPage2.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function LoginPage2() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="loginpage2"
          style={{
            backgroundImage: `url(images/hh.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "max-content",
            width: "390",
          }}
        >
          <div>
            <img
              height="100px"
              width="140px"
              style={{ marginTop: "20px" }}
              src="images/procard.png"
            />
          </div>
          {/* <div style={{ width: "100%", position: "absolute", bottom: "10%" }}> */}
          <p
            style={{
              marginTop: "270px",
              fontSize: "25px",
              textAlign: "center",
              fontWeight: "600",
              width: "90%",
            }}
          >
            The Networking Card of the Future
          </p>
          <p
            style={{
              marginTop: "20px",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Log in to get started
          </p>
          {/* <Link to="/signuppage2" style={{display:'flex',justifyContent:'center',textDecoration:'none',maxWidth:'390px',width:'100%'}}> <button  style={{marginTop:'95px',width:'88%',height:'46px',borderRadius:'30px',border:'none',background:"black",color:'white',fontSize:'15px'}}>Sign Up</button></Link> */}
          <Link
            to="/signinpage2"
            style={{
              display: "flex",
              justifyContent: "center",
              textDecoration: "none",
              maxWidth: "390px",
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <button
              style={{
                marginTop: "30px",
                width: "88%",
                height: "46px",
                borderRadius: "30px",
                color: "white",
                border: "none",
                fontSize: "15px",
                backgroundImage:
                  "linear-gradient(89.83deg, #0672A1 0.11%, #BB4985 99.85%)",
              }}
            >
              Log In
            </button>
          </Link>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
