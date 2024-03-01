import React, { useContext, useEffect, useState } from "react";
import "../EditHomeCard/EditHomeCard.css";
import AddIcon from "../../../Assets/Icons/addicon.svg";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { getAuth } from "firebase/auth";
import SocialSites2 from "../../Atoms/SocialSites2/SocialSites2";
import { Modal, Button, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import {
  update,
  getDatabase,
  ref as ref_database,
  child,
  get,
} from "firebase/database";
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { loginUserObj, updateSocialLinks } from "../../../Redux/Login/actions";
import { Spinner } from "react-activity";
import { useTranslation } from "react-i18next";
import { loginUserInfoSelector } from "../../../Redux/Login/selectors";
import ProfileLogo11 from "../../../Assets/Icons/profileLogo11.svg";
import SecondLogo from "../../../Assets/Icons/secondLogo.svg";
import { AppContext } from "../../../context/newContext";
import moment from "moment";
import "dayjs/locale/es";
import "dayjs/locale/en";
import { esES } from "@mui/x-date-pickers/locales";
// import Home from "../../organisms/Home/Home";
// import { Home } from "@mui/icons-material";
import ColorizeIcon from "@mui/icons-material/Colorize";
import ColorPickerModal from "../../Atoms/Dialog/ColorPickerModal";

const EditHomeCard = ({
  handleDOBClickFunc,
  showDrawerOnClick,
  closeDrawerOnClick,
  editUserData,
  setEditUserData,
  didPressBio,
  handleLogoOnChange,
  handleProfilePicOnChange,
  setCardColor,
  cardColor,
  theme,
}) => {
  console.log(editUserData);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const auth = getAuth();
  const userId2 = auth?.currentUser?.uid;
  const db = getDatabase();
  const storage = getStorage();
  const dispatch = useDispatch();
  const loginUserData = useSelector(loginUserInfoSelector);

  const textFieldOnChange = (e) => {
    const { name, value } = e.target;
    setEditUserData({ ...editUserData, [name]: value });
  };

  const handleCalenderOnChange = (e) => {
    // const selectedDate = newValue;
    setEditUserData({ ...editUserData, date_of_birth: e });
    setthedata2(e);
    // update(ref_database(db, `User/${loginUserData?.id}`), { dob: e })
  };
  //modal

  const handleChange = (event) => {
    if (event.target.value === t("Male")) {
      setEditUserData({ ...editUserData, gender: "Male" });
    } else if (event.target.value === t("Female")) {
      setEditUserData({ ...editUserData, gender: "Female" });
    } else if (event.target.value === t("nobinary")) {
      setEditUserData({ ...editUserData, gender: "Non-binary" });
    } else if (event.target.value === t("notanswer")) {
      setEditUserData({ ...editUserData, gender: "Undefined" });
    } else {
      setEditUserData({ ...editUserData, gender: event.target.value });
    }
    setthedata(event.target.value);
  };
  // const [profileurl, setprofileurl] = useState('')
  // useEffect(() => {
  //   if (editUserData?.profile_pic) {
  //     console.log(editUserData?.profile_pic)
  //     const storageRef = ref(storage, editUserData?.profile_pic)
  //     getDownloadURL(storageRef).then((URL) => {
  //       console.log(URL)
  //       setprofileurl(URL)
  //       // dispatch({ type: 'PROFILE_URL', payload: URL })

  //     }).catch((error) => {
  //       console.log(error)
  //     });
  //   }
  // }, [])
  console.log(editUserData.gender);
  let [thedata, setthedata] = useState("");
  let [thedata2, setthedata2] = useState("");

  const dbRef = ref_database(getDatabase());

  // useEffect(() => {
  //   get(child(dbRef, `User/${userId2}`))
  //     .then((response) => {
  //       let myuserdata = response.val()
  //       setthedata(myuserdata?.gender)
  //     })
  // }, [])
  console.log(thedata);
  const [profileurl, setprofileurl] = useState("");

  // let theprovider2 = localStorage.getItem("provider")
  useEffect(() => {
    let profilestring = loginUserData?.profileUrl?.slice(0, 10);
    // sapid
    // gs://testingappproject-85ec5.appspot.com
    if (profilestring === "gs://proca") {
      if (loginUserData?.profileUrl) {
        const storage = getStorage();
        const fileRef = ref(storage, loginUserData?.profileUrl);
        console.log(loginUserData.profileUrl);

        getDownloadURL(fileRef)
          .then((URL) => {
            console.log(URL);
            setprofileurl(URL);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      setprofileurl(loginUserData?.profileUrl);
    }

    if (loginUserData?.id) {
      get(child(dbRef, `User/${loginUserData?.id}`)).then((response) => {
        let myuserdata = response.val();
        setthedata(myuserdata?.gender);
        setthedata2(moment(myuserdata?.dob, "MMM DD,YYYY"));
      });
    }
  }, []);

  const [logourl, setlogourl] = useState("");
  useEffect(() => {
    if (editUserData?.logo) {
      const storageref = ref(storage, editUserData?.logo);
      getDownloadURL(storageref)
        .then((URL) => {
          console.log(URL);
          setlogourl(URL);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  console.log(loginUserData.id);

  let genderlang = () => {
    // editUserData?.gender
    let lange = localStorage.getItem("lang");

    if (lange == "en") {
      // return thedata
      if (thedata == "Masculino") {
        return "Male";
      } else if (thedata == "Femenino") {
        return "Female";
      } else if (thedata == "No binario") {
        return "Non-binary";
      } else if (thedata == "Indefinido") {
        return "Undefined";
      } else {
        return thedata;
      }
    }
    if (lange == "sp") {
      if (thedata == "Male") {
        return "Masculino";
      } else if (thedata == "Female") {
        return "Femenino";
      } else if (thedata == "Non-binary") {
        return "No binario";
      } else if (thedata == "Undefined") {
        return "Indefinido";
      } else {
        return thedata;
      }
    }
    // else {
    //   return thedata
    // }
  };

  // console.log(editUserData?.gender)

  let { Opendrawer, Setopendrawer } = useContext(AppContext);

  let datelang = localStorage.getItem("lang");
  console.log(datelang);
  // -----------------------------------------hex to rgba for bg color-------------------------------------

  let hexToRGBA = (hex) => {
    // Remove the '#' character if present
    hex = hex?.replace("#", "");

    // Convert the hex value to RGB
    const red = parseInt(hex?.substring(0, 2), 16);
    const green = parseInt(hex?.substring(2, 4), 16);
    const blue = parseInt(hex?.substring(4, 6), 16);

    // Convert RGB to RGBA with alpha value 0.1
    const rgba = `rgba(${red}, ${green}, ${blue}, 0.1)`;

    return rgba;
  };

  let [colorModal, setColorModal] = useState(false);
  let handleColorModal = () => {
    setColorModal(!colorModal);
  };

  return (
    <div
      className="edit_home_card1_main"
      style={{
        height: editUserData?.bio?.length > 50 ? "450px" : "400px",

        // border: "1px solid black",
      }}
    >
      <div
        className="edit_home_first_main"
        // style={{ backgroundColor: hexToRGBA(cardColor) }}
      >
        <div
          className="profile_main_div"
          style={{ border: !editUserData?.profile_pic ? "" : "2px solid grey" }}
        >
          {!profileurl ? (
            <img src={ProfileLogo11} alt="" className="uplaoded_image_css" />
          ) : (
            <img src={profileurl} alt="" className="uplaoded_image_css" />
          )}
        </div>
        <div className="plus_icon_add_div">
          <input
            type="file"
            id="file"
            accept="image/*"
            className="input_file_button_css"
            onChange={(e) => handleProfilePicOnChange(e)}
          />
          <label
            htmlFor="file"
            className="attachfile_label"
            style={{ cursor: "pointer" }}
          >
            <img src={AddIcon} alt="" className="add_icon_csss" />
          </label>
        </div>

        <div
        // style={{ border: "1px solid black" }}
        >
          <MenuIcon
            style={{
              color: theme === "theme1" ? "black" : "white",
              position: "absolute",
              top: "20px",
              left: "20px",
              fontSize: "2rem",
              cursor: "pointer",
            }}
            onClick={() => {
              return Setopendrawer(true);
            }}
            // showDrawerOnClick
          />
        </div>
      </div>
      <div className="edit_home_second_main">
        <div className="edit_bio_and_logoo_main">
          <div className="edit_bio_details_main">
            <div className="edit_name_with_icon_main">
              <div className="edit_icon_mainn">
                <ModeEditOutlineOutlinedIcon
                  style={{
                    color: theme === "theme1" ? "black" : "white",
                    fontSize: "1.1rem",
                  }}
                />
              </div>
              <input
                type="text"
                placeholder={t("Name")}
                name="name"
                style={{
                  fontWeight: "600",
                  backgroundColor: "inherit",
                  color: theme === "theme1" ? "black" : "white",
                }}
                value={editUserData?.name}
                className="input_fields_csss"
                onChange={(e) => textFieldOnChange(e)}
              />
              {/* <div className="bio_name_css">Name</div> */}
            </div>
            <div
              className="edit_name_with_icon_main_for_bio"
              style={{ cursor: "pointer" }}
            >
              <div className="edit_icon_mainn" onClick={() => didPressBio()}>
                <ModeEditOutlineOutlinedIcon
                  style={{
                    color: theme === "theme1" ? "black" : "white",
                    fontSize: "1.1rem",
                  }}
                />
              </div>
              <div
                className="bio_name_css_for_bio"
                style={{
                  color: theme === "theme1" ? "black" : "white",
                }}
                onClick={() => didPressBio()}
              >
                {editUserData?.bio != "" ? editUserData?.bio : t("Bio")}
              </div>
            </div>
            <div className="edit_name_with_icon_main">
              <div className="edit_icon_mainn">
                <ModeEditOutlineOutlinedIcon
                  style={{
                    color: theme === "theme1" ? "black" : "white",
                    fontSize: "1.1rem",
                  }}
                />
              </div>
              <input
                type="text"
                placeholder={t("Phone")}
                name="phone_number"
                value={editUserData?.phone_number}
                className={`input_fields_csss ${
                  theme === "theme1" ? "plb" : "plw"
                }`}
                onChange={(e) => textFieldOnChange(e)}
                style={{
                  backgroundColor: "inherit",
                  color: theme === "theme1" ? "black" : "white",
                }}
              />
              {/* <div className="bio_name_css">Phone</div> */}
            </div>
            <div className="edit_name_with_icon_main">
              <div className="edit_icon_mainn">
                <ModeEditOutlineOutlinedIcon
                  style={{
                    color: theme === "theme1" ? "black" : "white",
                    fontSize: "1.1rem",
                  }}
                />
              </div>
              <input
                type="text"
                placeholder={t("Location")}
                name="location"
                value={editUserData.location}
                className={`input_fields_csss ${
                  theme === "theme1" ? "plb" : "plw"
                }`}
                onChange={(e) => textFieldOnChange(e)}
                style={{
                  backgroundColor: "inherit",
                  color: theme === "theme1" ? "black" : "white",
                }}
              />
            </div>

            <div
              className="color-main"
              // style={{ backgroundColor: hexToRGBA(cardColor) }}
            >
              <div
                className="bio_name_css_for_bio"
                style={{
                  color: theme === "theme1" ? "black" : "white",
                }}
                onClick={() => didPressBio()}
              >
                Card Color
              </div>
              <div className="colors-container">
                <div
                  htmlFor="textclr"
                  style={{
                    height: "22px",

                    width: "22px",
                    borderRadius: "100%",
                    backgroundColor: theme === "theme1" ? "black" : "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    border: "1px solid black",
                    marginRight: "-2px",
                  }}
                  onClick={() => handleColorModal()}
                >
                  <ColorizeIcon
                    color="white"
                    fontSize="10px"
                    sx={{ color: theme === "theme1" ? "white" : "black" }}
                  />
                </div>
                {/* <input
                  type="color"
                  id="textclr"
                  style={{
                    opacity: "0",
                    height: "0px",
                    width: "0px",
                  }}
                  onChange={(e) => setCardColor(e.target.value)}
                  value={cardColor}
                /> */}
                <div
                  style={{
                    height: "22px",
                    marginLeft: "10px",
                    width: "22px",
                    borderRadius: "100%",
                    border: "1px solid black",
                    backgroundColor: "#00c4b9",
                    cursor: "pointer",
                    border: "1px solid white",
                  }}
                  onClick={() => setCardColor("#00c4b9")}
                ></div>
                <div
                  style={{
                    height: "22px",
                    marginLeft: "10px",
                    width: "22px",
                    borderRadius: "100%",
                    backgroundColor: "black",
                    cursor: "pointer",
                    border: "1px solid white",
                  }}
                  onClick={() => setCardColor("#000000")}
                ></div>
                <div
                  style={{
                    height: "22px",
                    marginLeft: "10px",
                    width: "22px",
                    borderRadius: "100%",
                    backgroundColor: "#ff4a4b",
                    cursor: "pointer",
                    border: "1px solid white",
                  }}
                  onClick={() => setCardColor("#ff4a4b")}
                ></div>
                <div
                  style={{
                    height: "22px",
                    marginLeft: "10px",
                    width: "22px",
                    borderRadius: "100%",
                    backgroundColor: "#ff9441",
                    cursor: "pointer",
                    border: "1px solid white",
                  }}
                  onClick={() => setCardColor("#ff9441")}
                ></div>
                <div
                  style={{
                    height: "22px",
                    marginLeft: "10px",
                    width: "22px",
                    borderRadius: "100%",
                    backgroundColor: "#fdc74a",
                    cursor: "pointer",
                    border: "1px solid white",
                  }}
                  onClick={() => setCardColor("#fdc74a")}
                ></div>
                <div
                  style={{
                    height: "22px",
                    marginLeft: "10px",
                    width: "22px",
                    borderRadius: "100%",
                    backgroundColor: "#009859",
                    cursor: "pointer",
                    border: "1px solid white",
                  }}
                  onClick={() => setCardColor("#009859")}
                ></div>
                <div
                  style={{
                    height: "22px",
                    marginLeft: "10px",
                    width: "22px",
                    borderRadius: "100%",
                    backgroundColor: "#0082ed",
                    cursor: "pointer",
                    border: "1px solid white",
                  }}
                  onClick={() => setCardColor("#0082ed")}
                ></div>
              </div>
            </div>
          </div>
          <div
            className="edit_main_logo"
            // style={{ backgroundColor: hexToRGBA(cardColor) }}
          >
            <div className="edit_logo_div">
              <div
                className="edit_logo_sub_main_div"
                style={{
                  border: !editUserData?.logo ? "" : "2px solid lightgrey",
                }}
              >
                {!logourl ? (
                  <img src={SecondLogo} alt="" className="logo_img_css" />
                ) : (
                  <img src={logourl} alt="" className="logo_img_css" />
                )}
              </div>
              <div className="plus_add_icon_div">
                <input
                  type="file"
                  id="afile"
                  accept="image/*"
                  className="input_file_button_css"
                  onChange={(e) => handleLogoOnChange(e)}
                />
                <label htmlFor="afile" className="attachfile_label">
                  <img src={AddIcon} alt="" className="add_icon_cssss" />
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="two_buttons_main_dOB_gender">
          <Box
            sx={{
              minWidth: 120,
              display: "flex",
              zIndex: "1!important",
            }}
          >
            <FormControl
              sx={{
                width: "10rem",
                borderRadius: "10px",
                outline: "none",
              }}
              size="small"
            >
              <InputLabel
                id="demo-simple-select-label"
                style={{
                  fontFamily: "MadeOuterSansLight, sans-serif",
                  fontSize: "14px",
                  color: "#8C6766",
               
                  display: "flex",
              
                  alignSelf: "center",
                  width: "100%",
                }}
              >
                {t("Gender")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={genderlang()}
                label="Gender"
                sx={{ color: "#8C6766" }}
                onChange={(e) => handleChange(e)}
              >
                <MenuItem
                  value={t("Male")}
                  style={{
                    fontFamily: "MadeOuterSansLight, sans-serif",
                    fontSize: "15px",
                    color: "#8C6766",
                  }}
                >
                  {" "}
                  {t("Male")}{" "}
                </MenuItem>
                <MenuItem
                  value={t("Female")}
                  style={{
                    fontFamily: "MadeOuterSansLight, sans-serif",
                    fontSize: "15px",
                    color: "#8C6766",
                  }}
                >
                  {" "}
                  {t("Female")}{" "}
                </MenuItem>

                <MenuItem
                  value={t("nobinary")}
                  style={{
                    fontFamily: "MadeOuterSansLight, sans-serif",
                    fontSize: "15px",
                    color: "#8C6766",
                  }}
                >
                  {" "}
                  {t("nobinary")}{" "}
                </MenuItem>
                <MenuItem
                  value={t("notanswer")}
                  style={{
                    fontFamily: "MadeOuterSansLight, sans-serif",
                    fontSize: "15px",
                    color: "#8C6766",
                  }}
                >
                  {t("notanswer")}{" "}
                </MenuItem>
               
              </Select>
            </FormControl>
          </Box>
          <div
            className="dateofbirth_main_div"
            onClick={() => handleDOBClickFunc()}
          >
            <div className="dateofbirth_main_css">
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                style={{
                  color: "#8C6766",
                  backgroundColor: "coral",
                 
                  fontFamily: "MadeOuterSansLight, sans-serif",
                  "& label": {
                    color: "#8C6766;", 
                    fontStyle: "MadeOuterSansLight",
                  },
                }}
                adapterLocale={datelang === "sp" ? "es" : "en"}
                localeText={
                  datelang === "sp" &&
                  esES.components.MuiLocalizationProvider.defaultProps
                    .localeText
                }
              >
                <Stack
                  spacing={3}
                  
                >
                  <MobileDatePicker
                    
                    sx={{
                      height: "100%",
                      width: "100%",
                      fontFamily: "MadeOuterSansLight, sans-serif",
                      fontSize: "15px",
                     
                      color: "#8C6766",
                      width: "10rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "center",
                      "& label": {
                        color: "#8C6766", 
                        fontStyle: "MadeOuterSansLight , sans-serif",
                      },
                    }}
                    value={thedata2}
                    inputFormat="MMM DD,YYYY"
                    onChange={(e) => {
                      return handleCalenderOnChange(e);
                    }}
                    className="mobile_date_picker_classname"
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        error={false}
                        size="small"
                        sx={{
                          height: "100%",
                          width: "100%",
                          fontFamily: "MadeOuterSansLight, sans-serif",
                        
                          outline: "#8C6766",
                          fontSize: "15px",
                          color: "#8C6766",
                          width: "10rem",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "center",
                          "& label": {
                            color: "#8C6766",
                            fontStyle: "MadeOuterSansLight , sans-serif",
                           
                          },
                        }}
                        label={t("DOB")}
                      />
                    )}
                  />
                </Stack>
              </LocalizationProvider>
             
            </div>
          </div>
        </div> */}
      </div>
      <ColorPickerModal
        colorModal={colorModal}
        handleColorModal={handleColorModal}
        setCardColor={setCardColor}
        cardColor={cardColor}
      />
    </div>
  );
};

export default EditHomeCard;
