import React, { useState } from "react";
import "../SocialSites2/SocialSites2.css";
import { Modal, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import Box from "@mui/material/Box";
import { ref, update } from "firebase/database";
import { db } from "../../Services/Firebase/config";

export default function SocialSites2({ theme, settheme, setStyle, istyle }) {
  // Array data for social sites
  const socialSitesData = [
    {
      name: "Phone",
      icon: "https://img.icons8.com/ios-filled/96/FFFFFF/phone.png",
      count: 1,
    },
    {
      name: "Email",
      icon: "https://img.icons8.com/material-rounded/96/ffffff/mail.png",
      count: 12,
    },
    {
      name: "Whatsapp",
      icon: "https://img.icons8.com/ios-glyphs/96/ffffff/whatsapp.png",
      count: 11,
    },
    {
      name: "Facebook",
      icon: "https://img.icons8.com/ios-glyphs/96/ffffff/facebook-new.png",
      count: 10,
    },
    {
      name: "CopyLink",
      icon: "https://img.icons8.com/ios/96/ffffff/link--v1.png",
      count: 10,
    },
    {
      name: "Linkedin",
      icon: "https://img.icons8.com/sf-regular/96/ffffff/linkedin.png",
      count: 10,
    },
    {
      name: "Paypal",
      icon: "https://img.icons8.com/sf-black/96/ffffff/paypal.png",
      count: 10,
    },
    {
      name: "Pinterest",
      icon: "https://img.icons8.com/sf-black/96/ffffff/pinterest.png",
      count: 10,
    },
    {
      name: "Reddit",
      icon: "https://img.icons8.com/windows/96/ffffff/reddit.png",
      count: 10,
    },
    {
      name: "Spotify",
      icon: "https://img.icons8.com/ios/96/ffffff/spotify--v1.png",
      count: 10,
    },
    {
      name: "Telegram",
      icon: "https://img.icons8.com/ios/96/ffffff/telegram-app.png",
      count: 10,
    },
    {
      name: "TikTok",
      icon: "https://img.icons8.com/sf-regular/96/ffffff/tiktok.png",
      count: 10,
    },
    {
      name: "Twitter",
      icon: "https://img.icons8.com/windows/96/ffffff/twitter.png",
      count: 10,
    },
    {
      name: "Vimeo",
      icon: "https://img.icons8.com/sf-black/96/ffffff/vimeo.png",
      count: 10,
    },
    {
      name: "Website",
      icon: "https://img.icons8.com/material-outlined/96/ffffff/domain.png",
      count: 10,
    },
    {
      name: "Youtube",
      icon: "https://img.icons8.com/ios/96/ffffff/youtube-play.png",
      count: 10,
    },
  ];
  const [openModal, setOpenModal] = useState(false);
  const [isAdded, setIsAdded] = useState(
    Array(socialSitesData.length).fill(false)
  );

  const handleAddClick = (index) => {
    const updatedAddedState = [...isAdded];
    updatedAddedState[index] = !updatedAddedState[index];
    setIsAdded(updatedAddedState);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  let userId = localStorage.getItem("sapiduserid");

  let changeTheme = (theme) => {
    update(ref(db, "User/" + userId), {
      theme: theme,
    }).then(() => {
      settheme(theme);
    });
  };

  let changeIconStyle = (style) => {
    update(ref(db, "User/" + userId), {
      IconStyle: style,
    }).then(() => {
      setStyle(style);
    });
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "90%",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              marginLeft: "8px",
              marginTop: "10px",
              fontWeight: "600",
              fontSize: "16px",
              width: "90%",
            }}
          >
            Theme
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
              marginLeft: "8px",
              width: "90%",
            }}
          >
            <div style={{ display: "flex" }}>
              <button
                style={{
                  width: "120px",
                  height: "30px",
                  background: "white",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
                onClick={() => changeTheme("theme1")}
              >
                <img
                  width="15"
                  height="15"
                  src={
                    theme === "theme1"
                      ? "https://img.icons8.com/parakeet-line/96/checked.png"
                      : "https://img.icons8.com/ios/96/circled.png"
                  }
                  alt="checked"
                />
                {"\u00A0"}
                {"\u00A0"}Bright
              </button>
              {"\u00A0"}
              {"\u00A0"}
              <button
                style={{
                  width: "120px",
                  height: "30px",
                  background: "black",
                  color: "white",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "16px",
                  border: "none",
                  cursor: "pointer",
                  border: "1px solid white",
                }}
                onClick={() => changeTheme("theme2")}
              >
                <img
                  width="15"
                  height="15"
                  src={
                    theme === "theme2"
                      ? "https://img.icons8.com/parakeet-line/96/FFFFFF/checked.png"
                      : "https://img.icons8.com/ios/96/FFFFFF/circled.png"
                  }
                  alt="circled"
                />
                {"\u00A0"}
                {"\u00A0"}Dark
              </button>
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
            </div>
            <img
              width="24"
              height="24"
              style={{ marginTop: "3px" }}
              onClick={handleOpenModal}
              src={
                theme === "theme2"
                  ? "https://img.icons8.com/material-outlined/96/ffffff/menu-2.png"
                  : "https://img.icons8.com/material-outlined/96/menu-2.png"
              }
              alt="menu-2"
            />
          </div>
        </div>
      </div>
      {/* <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div className='SocialSites2'>
          {socialSitesData.map((site, index) => (
            <div className='single-link-site' key={index}>
              <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {'\u00A0'}
                <div className='link-apps'>
                  <img width="20" height="20" src={site.icon} alt={site.name} />
                </div>
                {'\u00A0'}{'\u00A0'}
                <p>{site.name}</p>{'\u00A0'}{'\u00A0'}
                <h1>{site.count}</h1>
              </span>
              <div className='add-apps' onClick={() => handleAddClick(index)}>
                {isAdded[index] ? (
                  <img width="15" height="15" src="https://img.icons8.com/fluency/96/checkmark--v1.png" alt="checkmark--v1"/>
                ) : (
                  <img width="15" height="15" src="https://img.icons8.com/ios-glyphs/96/plus-math.png" alt="plus-math" />
                )}
                {'\u00A0'}Add{'\u00A0'}
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 360,
            bgcolor: "white",
            borderRadius: "21px",
            background: "#FFF",
            outline: "none",
            boxShadow: 24,
            maxHeight: "90vh",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 15,
              right: 15,
              width: "24px",
              height: "24px",
              background: "#ECECEC",
            }}
          >
            <CloseIcon />
          </IconButton>
          <div className="style-popup">
            {/* <h2 style={{ fontSize: "20px" }}>Style</h2>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "30px",
                width: "96%",
              }}
            >
              <h1 style={{ fontSize: "16px" }}>Color</h1>
              <p
                style={{
                  width: "55px",
                  height: "23px",
                  background: "rgba(237, 237, 237, 1) ",
                  color: "#4FA8ED",
                  borderRadius: "30px",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "13px",
                  justifyContent: "center",
                }}
              >
                <img
                  width="10"
                  height="10"
                  src="https://img.icons8.com/material-rounded/96/4FA8ED/full-stop.png"
                  alt="full-stop"
                />
                Blue
              </p>
            </span>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "96%",
                height: "60px",
                border: "2px solid rgba(237, 237, 237, 1)",
                marginTop: "10px",
                borderRadius: "15px",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
            >
              <div className="chossecolor1"></div>
              {"\u00A0"}
              {"\u00A0"}
              <div className="chossecolor2"></div>
              {"\u00A0"}
              {"\u00A0"}
              <div className="chossecolor3"></div>
              {"\u00A0"}
              {"\u00A0"}
              <div className="circle">
                <div className="chossecolor4"></div>
              </div>
              {"\u00A0"}
              {"\u00A0"}
              <div className="chossecolor5"></div>
              {"\u00A0"}
              {"\u00A0"}
              <div className="chossecolor6"></div>
              {"\u00A0"}
              {"\u00A0"}
              <div className="chossecolor7"></div>
            </div> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                // marginTop: "10px",
                // borderTop: "2px solid rgba(237, 237, 237, 1)",
                width: "96%",
                borderBottom: "2px solid rgba(237, 237, 237, 1)",
                justifyContent: "center",
                height: "90px",
              }}
            >
              <h1 style={{ marginBottom: "5px", fontSize: "16px" }}>Theme</h1>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  style={{
                    width: "110px",
                    height: "30px",
                    background: "white",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                  onClick={() => changeTheme("theme1")}
                >
                  <img
                    width="15"
                    height="15"
                    src={
                      theme === "theme1"
                        ? "https://img.icons8.com/parakeet-line/96/checked.png"
                        : "https://img.icons8.com/ios/96/circled.png"
                    }
                    alt="checked"
                  />
                  {"\u00A0"}
                  {"\u00A0"}Bright
                </button>
                {"\u00A0"}

                <button
                  style={{
                    width: "110px",
                    height: "30px",
                    background: "black",
                    color: "white",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "16px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => changeTheme("theme2")}
                >
                  <img
                    width="15"
                    height="15"
                    src={
                      theme === "theme2"
                        ? "https://img.icons8.com/parakeet-line/96/FFFFFF/checked.png"
                        : "https://img.icons8.com/ios/96/FFFFFF/circled.png"
                    }
                    alt="circled"
                  />
                  {"\u00A0"}
                  {"\u00A0"}Dark
                </button>
              </span>
            </div>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "10px",
                width: "96%",
              }}
            >
              <h1 style={{ fontSize: "16px" }}>Icon Style</h1>
            </span>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "96%",
                height: "60px",
                border: "2px solid rgba(237, 237, 237, 1)",
                marginTop: "10px",
                borderRadius: "15px",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
            >
              <div
                className="icon"
                style={{
                  border: istyle === "style1" ? "1px solid #4FA8ED" : null,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                onClick={() => changeIconStyle("style1")}
              >
                <img
                  width="35"
                  height="35"
                  src="https://img.icons8.com/fluency/96/ffffff/instagram-new.png"
                  alt="instagram-new"
                />
              </div>
              {/* <div className="circle1">
                <div className="link-apps1">
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/ios/96/ffffff/instagram-new--v1.png"
                    alt="instagram-new--v1"
                  />
                </div>
              </div> */}
              {"\u00A0"}
              {/* <div className="link-apps2">
                <img
                  width="15"
                  height="15"
                  src="https://img.icons8.com/ios/96/ffffff/instagram-new--v1.png"
                  alt="instagram-new--v1"
                />
              </div> */}
              {"\u00A0"}
              {/* <div className="link-apps3">
                <img
                  width="15"
                  height="15"
                  src="https://img.icons8.com/ios/96/ffffff/instagram-new--v1.png"
                  alt="instagram-new--v1"
                />
              </div> */}
              <div className="link-apps5"></div>
              <div
                style={{
                  height: "35px",
                  width: "35px",
                  border: istyle === "style2" ? "1px solid #4FA8ED" : null,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                onClick={() => changeIconStyle("style2")}
              >
                <div
                  className="link-apps4"
                  // style={{ border: "1px solid black" }}
                >
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/ios/96/ffffff/instagram-new--v1.png"
                    alt="instagram-new--v1"
                  />
                </div>
              </div>
              {"\u00A0"}{" "}
              {/* <div className="link-apps1">
                <img
                  width="15"
                  height="15"
                  src="https://img.icons8.com/fluency-systems-regular/96/ffffff/instagram.png"
                  alt="instagram"
                />
              </div> */}
              <div className="link-apps5"></div>
              {"\u00A0"}{" "}
              <div
                style={{
                  height: "35px",
                  width: "35px",
                  border: istyle === "style3" ? "1px solid #4FA8ED" : null,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                onClick={() => changeIconStyle("style3")}
              >
                <div className="link-apps12">
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/fluency-systems-regular/96/ffffff/instagram.png"
                    alt="instagram"
                  />
                </div>
              </div>
              {"\u00A0"}
              {/* <div className="circle1">
                <div className="link-apps1">
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/ios/96/ffffff/instagram-new--v1.png"
                    alt="instagram-new--v1"
                  />
                </div>
              </div> */}
            </div>
          </div>
          <br></br>
        </Box>
      </Modal>
    </>
  );
}
