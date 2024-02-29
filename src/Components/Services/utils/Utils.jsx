import PhoneLogo from "../../../Assets/Icons/phone.svg";
import WhatsappLogo from "../../../Assets/Icons/whatsapp.svg";
import CustomLinkLogo from "../../../Assets/Icons/customlink.svg";
import EmailLogo from "../../../Assets/Icons/email.svg";
import FacebookLogo from "../../../Assets/Icons/facebook.svg";
import instagram from "../../../Assets/Icons/instagram.svg";
import LinkedinLogo from "../../../Assets/Icons/linkedin.svg";
import PaypalLogo from "../../../Assets/Icons/paypal.svg";
import PinterestLogo from "../../../Assets/Icons/pinterest.svg";
import RedditLogo from "../../../Assets/Icons/reddit.svg";
import SnapChatLogo from "../../../Assets/Icons/snapchat.svg";
import SpotifyLogo from "../../../Assets/Icons/spotify.svg";
import TelegramLogo from "../../../Assets/Icons/telegram.svg";
import TiktokLogo from "../../../Assets/Icons/tiktok.svg";
import TwitterLogo from "../../../Assets/Icons/twitter.svg";
import VimeoLogo from "../../../Assets/Icons/vimeo.svg";
import YoutubeLogo from "../../../Assets/Icons/youtube.svg";
import TickIcon from "../../../Assets/Icons/tickicon.svg";
import webicon from "../../../Assets/Icons/webicon.png";
import { useTranslation } from "react-i18next";

// ---------------------------------------import React Images-------------------------------------------------

import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import {
  BiLogoDiscordAlt,
  BiLogoInstagramAlt,
  BiLogoPaypal,
  BiLogoPinterest,
  BiSolidMessageDetail,
} from "react-icons/bi";
import { BsFillPersonFill, BsReddit } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";

// import social icons
import { RiYoutubeFill } from "react-icons/ri";
import { BsDiscord } from "react-icons/bs";
import { ImSoundcloud } from "react-icons/im";
import {
  BiLogoSnapchat,
  BiLogoSpotify,
  BiLogoTelegram,
  BiLogoTiktok,
} from "react-icons/bi";
import { FaFacebookF, FaTwitch } from "react-icons/fa";
import { TiSocialTumbler } from "react-icons/ti";
import { BiLogoTwitter, BiLogoLinkedin } from "react-icons/bi";
import { useSelector } from "react-redux";
// import { SiApplemusic, SiCashapp } from "react-icons/Si";
import { AiOutlineLink } from "react-icons/ai";
import { LuLink2 } from "react-icons/lu";
import { FaVimeoSquare } from "react-icons/fa";

// import contact icons

import call from "../../../Assets/socialLink/phone.png";
import text from "../../../Assets/socialLink/text.png";
import whatsapp from "../../../Assets/socialLink/whatsapp.png";
import email from "../../../Assets/socialLink/email.png";

// import social icons

import instagramIcon from "../../../Assets/socialLink/instagram.png";
import facebook from "../../../Assets/socialLink/facebook.png";
import tiktok from "../../../Assets/socialLink/tiktok.png";
import twitter from "../../../Assets/socialLink/twitter.png";

import linkedin from "../../../Assets/socialLink/linkedin.png";
import twitch from "../../../Assets/socialLink/twitch.png";
import pinterest from "../../../Assets/socialLink/pinterest.png";
import youtube from "../../../Assets/socialLink/youtube.png";
import vimeo from "../../../Assets/socialLink/vimeo.png";
import snapchat from "../../../Assets/socialLink/snapchat.png";
import telegram from "../../../Assets/socialLink/telegram.png";
import reddit from "../../../Assets/socialLink/reddit.png";

import discord from "../../../Assets/socialLink/discord.png";
import tumblr from "../../../Assets/socialLink/tumblr.png";

// import music icons
import spotify from "../../../Assets/socialLink/spotify.png";

import applemusic from "../../../Assets/socialLink/applemusic.png";
import soundcloud from "../../../Assets/socialLink/soundcloud.png";

// import payment icons

import cashapp from "../../../Assets/socialLink/cash.svg";
import paypal from "../../../Assets/socialLink/paypal.png";

// import payment icons

import website from "../../../Assets/socialLink/website.png";
// import calendly from "../../../Assets/socialLink/calendly.png";
import custom from "../../../Assets/socialLink/customlink.png";

export const returnSocialImages = (item) => {
  if (item?.name == "Phone") {
    return <img src={PhoneLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Whatsapp") {
    return <img src={WhatsappLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Custom Link") {
    return (
      <img src={CustomLinkLogo} alt="" className="social_sites_icon_css" />
    );
  } else if (item?.name == "Email") {
    return <img src={EmailLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Facebook") {
    return <img src={FacebookLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Instagram") {
    return <img src={instagram} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "LinkedIn") {
    return <img src={LinkedinLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Paypal") {
    return <img src={PaypalLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Pinterest") {
    return <img src={PinterestLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Reddit") {
    return <img src={RedditLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Snapchat") {
    return <img src={SnapChatLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Spotify") {
    return <img src={SpotifyLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Telegram") {
    return <img src={TelegramLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "TikTok") {
    return <img src={TiktokLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Twitter") {
    return <img src={TwitterLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Vimeo") {
    return <img src={VimeoLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Website") {
    return <img src={webicon} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "YouTube") {
    return <img src={YoutubeLogo} alt="" className="social_sites_icon_css" />;
  }
};

export let returnPngIcons = (name) => {
  if (name === "Phone") {
    return call;
  } else if (name === "Text") {
    return text;
  } else if (name === "Whatsapp") {
    return whatsapp;
  } else if (name === "Email") {
    return email;
  } else if (name === "Snapchat") {
    return snapchat;
  } else if (name === "Facebook") {
    return facebook;
  } else if (name === "Instagram") {
    return instagram;
  } else if (name === "Twitter") {
    return twitter;
  } else if (name === "Twitch") {
    return twitch;
  } else if (name === "YouTube") {
    return youtube;
  } else if (name === "Telegram") {
    return telegram;
  } else if (name === "Pinterest") {
    return pinterest;
  } else if (name === "TikTok") {
    return tiktok;
  } else if (name === "LinkedIn") {
    return linkedin;
  } else if (name === "Reddit") {
    return reddit;
  } else if (name === "Discord") {
    return discord;
  } else if (name === "Tumblr") {
    return tumblr;
  } else if (name === "Spotify") {
    return spotify;
  } else if (name === "Vimeo") {
    return vimeo;
  } else if (name === "Apple Music") {
    return applemusic;
  } else if (name === "SoundCloud") {
    return soundcloud;
  } else if (name === "Cash App") {
    return applemusic;
  } else if (name === "Paypal") {
    return paypal;
  } else if (name === "Website") {
    return website;
  } else if (name === "Custom Link") {
    return custom;
  } else if (name === "CashApp") {
    return cashapp;
  } else if (name === "AppleMusic") {
    return applemusic;
  }
};

export let returnIcons = (name, size, color = "white") => {
  console.log(color);
  if (name === "Phone") {
    return (
      <MdCall
        style={{ color: color ? color : "white", fontSize: `${size}px` }}
      />
    );
  } else if (name === "Text") {
    return (
      <BiSolidMessageDetail
        style={{ color: color ? color : "white", fontSize: `${size}px` }}
      />
    );
  } else if (name === "Whatsapp") {
    return (
      <RiWhatsappFill
        style={{ color: color ? color : "white", fontSize: `${size}px` }}
      />
    );
  } else if (name === "Email") {
    return (
      <MdEmail
        style={{ color: color ? color : "white", fontSize: `${size}px` }}
      />
    );
  } else if (name === "Snapchat") {
    return (
      <BiLogoSnapchat
        style={{ color: color ? color : "white", fontSize: `${size}px` }}
      />
    );
  } else if (name === "Facebook") {
    return (
      <FaFacebookF
        style={{ color: color ? color : "white", fontSize: `${size}px` }}
      />
    );
  } else if (name === "Twitter") {
    return (
      <BiLogoTwitter
        style={{ color: color ? color : "white", fontSize: `${size}px` }}
      />
    );
  } else if (name === "Pinterest") {
    return (
      <BiLogoPinterest
        style={{ color: color ? color : "white", fontSize: `${size}px` }}
      />
    );
  } else if (name === "Instagram") {
    return (
      <BiLogoInstagramAlt
        style={{ color: color ? color : "white", fontSize: `${size}px` }}
      />
    );
  } else if (name === "LinkedIn") {
    return (
      <BiLogoLinkedin
        style={{ color: color ? color : "white", fontSize: `${size}px` }}
      />
    );
  }
  // else if (name === "Twitter") {
  //   return twitter;
  // }
  else if (name === "Twitch") {
    return (
      <FaTwitch
        style={{ color: color ? color : "white", fontSize: `${size}px` }}
      />
    );
  } else if (name === "YouTube") {
    return (
      <RiYoutubeFill
        style={{ color: color ? color : "white", fontSize: `${size}px` }}
      />
    );
  } else if (name === "Telegram") {
    return (
      <BiLogoTelegram
        style={{ color: color ? color : "white", fontSize: `${size}px` }}
      />
    );
  }
  // else if (name === "Pinterest") {
  //   return pinterest;
  // }
  else if (name === "TikTok") {
    return (
      <BiLogoTiktok
        style={{ color: color ? color : "white", fontSize: `${size}px` }}
      />
    );
  }
  // else if (name === "Linkedin") {
  //   return linkedin;
  // }
  else if (name === "Reddit") {
    return (
      <BsReddit
        style={{ color: color ? color : "white", fontSize: `${size}px` }}
      />
    );
  } else if (name === "Discord") {
    return <BsDiscord style={{ color: color, fontSize: `${size}px` }} />;
  } else if (name === "Tumblr") {
    return <TiSocialTumbler style={{ color: color, fontSize: `${size}px` }} />;
  } else if (name === "Spotify") {
    return <BiLogoSpotify style={{ color: color, fontSize: `${size}px` }} />;
  }
  // else if (name === "Apple Music") {
  //   return applemusic;
  // }
  else if (name === "Sound Cloud") {
    return <ImSoundcloud style={{ color: color, fontSize: `${size}px` }} />;
  }
  // else if (name === "Cash App") {
  //   return <SiCashapp style={{ color: color, fontSize: `${size}px` }} />;
  // }
  else if (name === "Paypal") {
    return <BiLogoPaypal style={{ color: color, fontSize: `${size}px` }} />;
  }
  // else if (name === "Calendly") {
  //   return calendly;
  // }
  else if (name === "Website") {
    return <AiOutlineLink style={{ color: color, fontSize: `${size}px` }} />;
  } else if (name === "Custom Link") {
    return <LuLink2 style={{ color: color, fontSize: `${size}px` }} />;
  } else if (name === "Vimeo") {
    return <FaVimeoSquare style={{ color: color, fontSize: `${size}px` }} />;
  }
  //  else if (name === "CashApp") {
  //   return cashapp;
  // }
  // else if (name === "Apple Music") {
  //   return <SiApplemusic style={{ color: color, fontSize: `${size}px` }} />;
  // }
};

export const returnReactImages = (item) => {
  if (item?.name == "Phone") {
    return <img src={PhoneLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Whatsapp") {
    return <img src={WhatsappLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Custom Link") {
    return (
      <img src={CustomLinkLogo} alt="" className="social_sites_icon_css" />
    );
  } else if (item?.name == "Email") {
    return <img src={EmailLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Facebook") {
    return <img src={FacebookLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Instagram") {
    return <img src={instagram} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "LinkedIn") {
    return <img src={LinkedinLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Paypal") {
    return <img src={PaypalLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Pinterest") {
    return <img src={PinterestLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Reddit") {
    return <img src={RedditLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Snapchat") {
    return <img src={SnapChatLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Spotify") {
    return <img src={SpotifyLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Telegram") {
    return <img src={TelegramLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "TikTok") {
    return <img src={TiktokLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Twitter") {
    return <img src={TwitterLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Vimeo") {
    return <img src={VimeoLogo} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "Website") {
    return <img src={webicon} alt="" className="social_sites_icon_css" />;
  } else if (item?.name == "YouTube") {
    return <img src={YoutubeLogo} alt="" className="social_sites_icon_css" />;
  }
};

export const returnSocialImages2 = (item) => {
  if (item?.name == "Phone") {
    return (
      <img
        src={PhoneLogo}
        alt=""
        style={{ height: "30px", width: "30px", marginLeft: "5px" }}
      />
    );
  } else if (item?.name == "Whatsapp") {
    return (
      <img
        src={WhatsappLogo}
        alt=""
        style={{ height: "30px", width: "30px", marginLeft: "5px" }}
      />
    );
  } else if (item?.name == "Custom Link") {
    return (
      <img
        src={CustomLinkLogo}
        alt=""
        style={{ height: "30px", width: "30px", marginLeft: "5px" }}
      />
    );
  } else if (item?.name == "Email") {
    return (
      <img
        src={EmailLogo}
        alt=""
        style={{ height: "30px", width: "30px", marginLeft: "5px" }}
      />
    );
  } else if (item?.name == "Facebook") {
    return (
      <img
        src={FacebookLogo}
        alt=""
        style={{ height: "30px", width: "30px", marginLeft: "5px" }}
      />
    );
  } else if (item?.name == "Instagram") {
    return (
      <img
        src={instagram}
        alt=""
        style={{ height: "30px", width: "30px", marginLeft: "5px" }}
      />
    );
  } else if (item?.name == "LinkedIn") {
    return (
      <img
        src={LinkedinLogo}
        alt=""
        style={{ height: "30px", width: "30px", marginLeft: "5px" }}
      />
    );
  } else if (item?.name == "Paypal") {
    return (
      <img
        src={PaypalLogo}
        alt=""
        style={{ height: "30px", width: "30px", marginLeft: "5px" }}
      />
    );
  } else if (item?.name == "Pinterest") {
    return (
      <img
        src={PinterestLogo}
        alt=""
        style={{ height: "30px", width: "30px", marginLeft: "5px" }}
      />
    );
  } else if (item?.name == "Reddit") {
    return (
      <img
        src={RedditLogo}
        alt=""
        style={{ height: "30px", width: "30px", marginLeft: "5px" }}
      />
    );
  } else if (item?.name == "Snapchat") {
    return (
      <img
        src={SnapChatLogo}
        alt=""
        style={{ height: "30px", width: "30px", marginLeft: "5px" }}
      />
    );
  } else if (item?.name == "Spotify") {
    return (
      <img
        src={SpotifyLogo}
        alt=""
        style={{ height: "30px", width: "30px", marginLeft: "5px" }}
      />
    );
  } else if (item?.name == "Telegram") {
    return (
      <img
        src={TelegramLogo}
        alt=""
        style={{ height: "30px", width: "30px", marginLeft: "5px" }}
      />
    );
  } else if (item?.name == "TikTok") {
    return (
      <img
        src={TiktokLogo}
        alt=""
        style={{ height: "30px", width: "30px", marginLeft: "5px" }}
      />
    );
  } else if (item?.name == "Twitter") {
    return (
      <img
        src={TwitterLogo}
        alt=""
        style={{ height: "30px", width: "30px", marginLeft: "5px" }}
      />
    );
  } else if (item?.name == "Vimeo") {
    return (
      <img
        src={VimeoLogo}
        alt=""
        style={{ height: "30px", width: "30px", marginLeft: "5px" }}
      />
    );
  } else if (item?.name == "Website") {
    return (
      <img
        src={webicon}
        alt=""
        style={{ height: "30px", width: "30px", marginLeft: "5px" }}
      />
    );
  } else if (item?.name == "YouTube") {
    return (
      <img
        src={YoutubeLogo}
        alt=""
        style={{ height: "30px", width: "30px", marginLeft: "5px" }}
      />
    );
  }
};

export const returnPlaceHolderNames = (item) => {
  if (item?.name == "Phone") {
    return "Phone Number";
  } else if (item?.name == "Whatsapp") {
    return "Phone Number";
  } else if (item?.name == "Custom Link") {
    return "https://www.site.com";
  } else if (item?.name == "Email") {
    return "Email";
  } else if (item?.name == "Facebook") {
    return "Facebook profile link";
  } else if (item?.name == "Instagram") {
    return "Username";
  } else if (item?.name == "LinkedIn") {
    return "Linkedin profile link";
  } else if (item?.name == "Paypal") {
    return "PayPal.me link";
  } else if (item?.name == "Pinterest") {
    return "Pinterest profile link";
  } else if (item?.name == "Reddit") {
    return "https://www.site.com";
  } else if (item?.name == "Snapchat") {
    return "Username";
  } else if (item?.name == "Spotify") {
    return "Album or Artist";
  } else if (item?.name == "Telegram") {
    return "Phone Number";
  } else if (item?.name == "TikTok") {
    return "Username";
  } else if (item?.name == "Twitter") {
    return "Username";
  } else if (item?.name == "Vimeo") {
    return "Link";
  } else if (item?.name == "Website") {
    return "https://www.site.com";
  } else if (item?.name == "YouTube") {
    return "Youtube profile link";
  }
};

export const returnPlaceHolderNamesForSpanish = (item) => {
  if (item?.name == "Phone") {
    return "Téléphone";
  } else if (item?.name == "Whatsapp") {
    return "Phone Number";
  } else if (item?.name == "Custom Link") {
    return "https://www.site.com";
  } else if (item?.name == "Email") {
    return "Email";
  } else if (item?.name == "Facebook") {
    return "Lien de votre profil Facebook";
  } else if (item?.name == "Instagram") {
    return "identifiant";
  } else if (item?.name == "LinkedIn") {
    return "Lien de votre profil Linkedin";
  } else if (item?.name == "Paypal") {
    return "Lien de votre Paypal.me";
  } else if (item?.name == "Pinterest") {
    return "Lien de votre profil Pinterest";
  } else if (item?.name == "Reddit") {
    return "https://www.site.com";
  } else if (item?.name == "Snapchat") {
    return "identifiant";
  } else if (item?.name == "Spotify") {
    return "Album ou Artist";
  } else if (item?.name == "Telegram") {
    return "Numéro de téléphone";
  } else if (item?.name == "TikTok") {
    return "identifiant";
  } else if (item?.name == "Twitter") {
    return "identifiant";
  } else if (item?.name == "Vimeo") {
    return "Lien";
  } else if (item?.name == "Website") {
    return "https://www.site.com";
  } else if (item?.name == "YouTube") {
    return "Lien de votre chaîne Youtube";
  }
};

export const openSocialApp = (item, inputData) => {
  if (item?.name == "Phone") {
    return `tel:${inputData}`;
  } else if (item?.name == "Whatsapp") {
    return `https://api.whatsapp.com/send?phone=${inputData}`;
  } else if (item?.name == "Custom Link") {
    return `${inputData}`;
  } else if (item?.name == "Email") {
    return `mailto:${inputData}`;
  } else if (item?.name == "Facebook") {
    return `${inputData}`;
  } else if (item?.name == "Instagram") {
    return `https://www.instagram.com/${inputData}`;
  } else if (item?.name == "LinkedIn") {
    return `${inputData}`;
  } else if (item?.name == "Paypal") {
    return `${inputData}`;
  } else if (item?.name == "Pinterest") {
    return `${inputData}`;
  } else if (item?.name == "Reddit") {
    return `${inputData}`;
  } else if (item?.name == "Snapchat") {
    return `https://www.snapchat.com/add/${inputData}`;
  } else if (item?.name == "Spotify") {
    return `${inputData}`;
  } else if (item?.name == "Telegram") {
    return `${inputData}`;
  } else if (item?.name == "TikTok") {
    return `https://www.tiktok.com/@${inputData}`;
  } else if (item?.name == "Twitter") {
    return `https://twitter.com/${inputData}`;
  } else if (item?.name == "Vimeo") {
    return `${inputData}`;
  } else if (item?.name == "Website") {
    return `${inputData}`;
  } else if (item?.name == "YouTube") {
    return `${inputData}`;
  }
};

// export const returnSocialInstructions = (item) => {
//   // if (item?.name == "Phone") {
//   //   return (
//   //     <div>
//   //       {t("whatsappInstructions")}
//   //     </div>
//   //   );
//   // } else if (item?.name == "Whatsapp") {
//   //   return (
//   //     <div>
//   //       {t("whatsappInstructions")}
//   //     </div>
//   //   );
//   // } else if (item?.name == "Custom Link") {
//   //   return (
//   //     <div>
//   //       {t("customLinkInstruction")}
//   //     </div>
//   //   );
//   // } else if (item?.name == "Email") {
//   //   return <div>{t("emailInstruction")}</div>;
//   // } else if (item?.name == "Facebook") {
//   //   return (
//   //     <div>
//   //       {t("facebookInstructions")}<br />
//   //       {t("faceBookInstructions1")}<br />
//   //       {t("faceBookInstructions2")} <br />
//   //       {t("faceBookInstructions3")} <br />
//   //       {t("faceBookInstructions4")}<br />
//   //       {t("faceBookInstructions5")} <br />
//   //       {t("faceBookInstructions6")}
//   //     </div>
//   //   );
//   // } else if (item?.name == "Instagram") {
//   //   return (
//   //     <div>
//   //       {t("instagramInstruction1")} <br />
//   //       {t("instagramInstruction2")} <br />
//   //       {t("instagramInstruction3")} <br />
//   //       {t("instagramInstruction4")}
//   //     </div>
//   //   );
//   // } else if (item?.name == "LinkedIn") {
//   //   return (
//   //     <div>
//   //       {t('linkedinInstructions')} <br />
//   //       {t("linkedinInstruction1")}<br />
//   //       {t("linkedinInstruction2")} <br />
//   //       {t("linkedinInstruction3")} <br />
//   //       {t("linkedinInstruction4")} <br />
//   //       {t("linkedinInstruction5")}
//   //       <br />
//   //       {t("linkedinInstruction6")}
//   //     </div>
//   //   );
//   // } else if (item?.name == "Paypal") {
//   //   return (
//   //     <div>
//   //       {t("payPalInstruction1")} <br />
//   //       {t("payPalInstruction2")} <br />
//   //       {t("payPalInstruction3")} <br />
//   //       {t("payPalInstruction4")}
//   //     </div>
//   //   );
//   // } else if (item?.name == "Pinterest") {
//   //   return (
//   //     <div>
//   //       {t("pinterestInstruction1")} <br />
//   //       {t("pinterestInstruction2")}
//   //       <br />
//   //       {t("pinterestInstruction3")}
//   //       <br />
//   //       {t("pinterestInstruction4")} <br />
//   //       {t("pinterestInstruction5")}
//   //     </div>
//   //   );
//   // } else if (item?.name == "Reddit") {
//   //   return (
//   //     <div>
//   //       {t("redditInstruction1")} <br />
//   //       {t("redditInstruction2")} <br />
//   //       {t("redditInstruction3")} <br />
//   //       {t("redditInstruction4")}
//   //     </div>
//   //   );
//   // } else if (item?.name == "Snapchat") {
//   //   return (
//   //     <div>
//   //       {t("snapchatInstruction1")} <br />
//   //       {t("snapchatInstruction2")}
//   //       <br />
//   //       {t("snapchatInstruction3")} <br />
//   //       {t("snapchatInstruction4")}
//   //     </div>
//   //   );
//   // } else if (item?.name == "Spotify") {
//   //   return (
//   //     <div>
//   //       {t("spotifyInstruction1")} <br />
//   //       {t("spotifyInstruction2")} <br />
//   //       {t("spotifyInstruction3")} <br />
//   //       {t("spotifyInstruction4")}
//   //     </div>
//   //   );
//   // } else if (item?.name == "Telegram") {
//   //   return (
//   //     <div>
//   //       {t("telegramInstruction1")}
//   //       <br />
//   //       {t("telegramInstruction2")}
//   //       <br />
//   //       {t("telegramInstruction3")} <br />
//   //       {t("telegramInstruction4")}
//   //     </div>
//   //   );
//   // } else if (item?.name == "TikTok") {
//   //   return (
//   //     <div>
//   //       {t("tiktokInstruction1")}
//   //       <br />
//   //       {t("tiktokInstruction2")}
//   //       <br />
//   //       {t("tiktokInstruction3")}
//   //       <br />
//   //       {t("tiktokInstruction4")}
//   //     </div>
//   //   );
//   // } else if (item?.name == "Twitter") {
//   //   return (
//   //     <div>
//   //       {t("twitterInstruction1")}
//   //       <br />
//   //       {t("twitterInstruction2")}
//   //       <br />
//   //       {t("twitterInstruction3")}
//   //       <br />
//   //       {t("twitterInstruction4")}
//   //     </div>
//   //   );
//   // } else if (item?.name == "Vimeo") {
//   //   return (
//   //     <div>
//   //       {t("vimeoInstruction1")}
//   //       <br />
//   //       {t("vimeoInstruction2")}
//   //       <br />
//   //       {t("vimeoInstruction3")}
//   //       <br />
//   //       {t("vimeoInstruction4")}
//   //     </div>
//   //   );
//   // } else if (item?.name == "Website") {
//   //   return (
//   //     <div>
//   //       Input a website link/ URL of your choice starting with http:// or
//   //       https://
//   //     </div>
//   //   );
//   // } else if (item?.name == "YouTube") {
//   //   return (
//   //     <div>
//   //       {t("youtubeInstruction1")}
//   //       <br />
//   //       {t("youtubeInstruction2")}
//   //       <br />
//   //       {t("youtubeInstruction3")}
//   //       <br />
//   //       {t("youtubeInstruction4")}
//   //     </div>
//   //   );
//   // }
// };

export const returnSocialSitesNames = (item) => {
  if (item?.name == "Phone" || item?.name == "Téléphone") {
  } else if (item?.name == "Whatsapp") {
  } else if (item?.name == "Custom Link" || item?.name == "Lien personnalisé") {
  } else if (item?.name == "Email" || "E-mail") {
  } else if (item?.name == "Facebook") {
  } else if (item?.name == "Instagram") {
  } else if (item?.name == "LinkedIn") {
  } else if (item?.name == "Paypal") {
  } else if (item?.name == "Pinterest") {
  } else if (item?.name == "Reddit") {
  } else if (item?.name == "Snapchat") {
  } else if (item?.name == "Spotify") {
  } else if (item?.name == "Telegram") {
  } else if (item?.name == "TikTok") {
  } else if (item?.name == "Twitter") {
  } else if (item?.name == "Vimeo") {
  } else if (item?.name == "Website" || item?.name == "Site web") {
  } else if (item?.name == "YouTube") {
  }
};
