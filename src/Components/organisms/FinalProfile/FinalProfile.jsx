import React from 'react'
import "../FinalProfile/FinalProfile.css";

const FinalProfile = ({ editUserData }) => {
  return (
    <>
    <div style={{display:"flex",justifyContent:'center'}}>
    <div className='finalprofile'>
   <div className='myprofile-box'>
   <div className='myprofile'>
 <span> <img src='images/Ellipse 97.png' id='img'/>
 <h1>Muhammad Abdullah</h1>
  <span style={{display:'flex',alignItems:'center',fontSize:'15px',marginTop:'10px'}}><img width="20" height="20" src="https://img.icons8.com/material/96/4FA8ED/briefcase--v1.png" alt="briefcase--v1"/>{'\u00A0'}Business Developer</span>
  <span style={{display:'flex',alignItems:'center',fontSize:'15px',marginTop:'10px'}}><img width="20" height="20" src="https://img.icons8.com/ios-filled/96/4FA8ED/apple-phone.png" alt="apple-phone"/>{'\u00A0'}03123123123</span>
  <span style={{display:'flex',alignItems:'center',fontSize:'15px',marginTop:'10px'}}><img width="20" height="20" src="https://img.icons8.com/ios-filled/96/4FA8ED/marker.png" alt="marker"/>{'\u00A0'}Lahore,Pakistan</span></span>
  <img src='images/Ellipse 2.png' id='img-logo'/>
  </div>
   </div>
   <div className='save-contact-box' style={{marginTop:'10px',marginBottom:'10px'}}>
   <span style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10px',marginBottom:'10px',width:'100%'}}><button style={{background:'#4FA8ED',color:'white',border:'none',width:'65%',height:'40px',borderRadius:'10px'}}>Save Contact</button>{'\u00A0'}{'\u00A0'} <button style={{background:'#4FA8ED',color:'white',border:'none',width:'65px',height:'40px',borderRadius:'10px'}}><img width="25" height="25" src="https://img.icons8.com/external-creatype-outline-colourcreatype/96/FFFFFF/external-arrows-essential-ui-v1-creatype-outline-colourcreatype-2.png" alt="external-arrows-essential-ui-v1-creatype-outline-colourcreatype-2"/></button></span>
   <div style={{overflowY:'scroll',maxHeight:'100vh',display:'flex',alignItems:'center',width:'95%',flexDirection:'column'}}>
   <div className='single-link-site'>
   <span style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>{'\u00A0'}
     <div className='link-apps'>
       <img width="20" height="20" src="https://img.icons8.com/material-rounded/96/ffffff/linkedin--v1.png" alt="linkedin--v1"/>
     </div>
     {'\u00A0'}{'\u00A0'}
    <span style={{display:'flex',flexDirection:'column'}}> <p style={{fontWeight:'bold'}}>LinkedIn</p><p style={{fontSize:'12px',width:'190px',overflow:'hidden'}}>https://pk.linkedin.com</p></span>
   </span>
   <div className='add-apps'>
   <img width="20" height="20" src="https://img.icons8.com/ios-filled/96/long-arrow-right.png" alt="long-arrow-right"/> {'\u00A0'}{'\u00A0'}
   </div>
 </div>

 <div className='single-link-site'>
   <span style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>{'\u00A0'}
     <div className='link-apps'>
     <img width="20" height="20" src="https://img.icons8.com/ios-filled/96/FFFFFF/phone.png" alt="phone"/>
     </div>
     {'\u00A0'}{'\u00A0'}
    <span style={{display:'flex',flexDirection:'column'}}> <p style={{fontWeight:'bold'}}>Call</p><p style={{fontSize:'12px',width:'190px',overflow:'hidden'}}>342353463</p></span>
   </span>
   <div className='add-apps'>
   <img width="20" height="20" src="https://img.icons8.com/ios-filled/96/long-arrow-right.png" alt="long-arrow-right"/> {'\u00A0'}{'\u00A0'}
   </div>
 </div>
 <div className='single-link-site'>
   <span style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>{'\u00A0'}
     <div className='link-apps'>
     <img width="20" height="20" src="https://img.icons8.com/material-rounded/96/ffffff/mail.png" alt="mail"/>
     </div>
     {'\u00A0'}{'\u00A0'}
    <span style={{display:'flex',flexDirection:'column'}}> <p style={{fontWeight:'bold'}}>Email</p><p style={{fontSize:'12px',width:'190px',overflow:'hidden'}}>Salmanwork@gmail.com</p></span>
   </span>
   <div className='add-apps'>
   <img width="20" height="20" src="https://img.icons8.com/ios-filled/96/long-arrow-right.png" alt="long-arrow-right"/> {'\u00A0'}{'\u00A0'}
   </div>
 </div>
 <div className='single-link-site'>
 <span style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>{'\u00A0'}
   <div className='link-apps'>
   <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/96/ffffff/whatsapp.png" alt="whatsapp"/>
   </div>
   {'\u00A0'}{'\u00A0'}
  <span style={{display:'flex',flexDirection:'column'}}> <p style={{fontWeight:'bold'}}>Whatsapp</p><p style={{fontSize:'12px',width:'190px',overflow:'hidden'}}>567547753</p></span>
 </span>
 <div className='add-apps'>
 <img width="20" height="20" src="https://img.icons8.com/ios-filled/96/long-arrow-right.png" alt="long-arrow-right"/> {'\u00A0'}{'\u00A0'}
 </div>
</div>
<div className='single-link-site'>
<span style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>{'\u00A0'}
  <div className='link-apps'>
  <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/96/ffffff/facebook-new.png" alt="facebook-new"/>
  </div>
  {'\u00A0'}{'\u00A0'}
 <span style={{display:'flex',flexDirection:'column'}}> <p style={{fontWeight:'bold'}}>Facebook</p><p style={{fontSize:'12px',width:'190px',overflow:'hidden'}}>https://pk.Facebook.com</p></span>
</span>
<div className='add-apps'>
<img width="20" height="20" src="https://img.icons8.com/ios-filled/96/long-arrow-right.png" alt="long-arrow-right"/> {'\u00A0'}{'\u00A0'}
</div>
</div>
 </div>
   </div>
   <img width='140px' height='100px' src='images/procard.png'/><br></br>
    </div>
    </div>
    
    </>
    
  )
}
export default FinalProfile;