import React, { useState} from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import ClassIcon from '@mui/icons-material/Class';
import './Navbar.css'
import {Grid} from "@mui/material"
import insta_log from "../../images/logoinsta.png"
import home from "../../images/home.svg"
import message from "../../images/message.svg"
import react from "../../images/love.svg"
import find from '../../images/find.svg'
//import Vish from '../../images/IMG-20200405-WA0131.jpg'
import {Avatar} from "@mui/material"
import{Link,Navigate}  from "react-router-dom"
import {UploadPop} from '../Upload/Upload'
import {useContext} from 'react'
import {AuthProvider} from '../../Context/AuthContextProvider'


export const Navbar=()=>{
  const [showDropDown, setShowDropDown] = useState(false);
  const {Auth,handle}=useContext(AuthProvider)
  if(Auth=="false"){
    return <Navigate to='/' />
  }
 

  
  let user=JSON.parse(localStorage.getItem('UserD'))
  return             <div className="navbar_content">
  <Grid container>
     <Grid item xs={2}></Grid>
     
   <Link to="/"><Grid  item xs={1}><img className="insta-logo" src={insta_log} width="105px" alt="" /></Grid></Link> 
   <Grid item xs={1}></Grid>
     <Grid item xs={2}>
       <input className="nav-searchbar" type="text" placeholder="Search" />
     </Grid>
    <Grid item xs={2}></Grid>
     <Grid item xs={3} style={{display:"flex"}}>
   <Link to="/home"><img className="navbar-img" src={home}  width="25px" /></Link>    
   <Link to ="/chats"> <img className="navbar-img" src={message}  width="25px" /></Link>   
    <UploadPop/>
       <img className="navbar-img" src={find}  width="25px" />
     
    <Link to ="/notification"> <img className="navbar-img" src={react}  width="25px" /></Link>
    <div>
    <Avatar className="navbar-img" style={{"maxWidth":"25px", "maxHeight":"25px", cursor : "pointer"}} src="" onClick={() => setShowDropDown(!showDropDown)} />
    <div id="drop-downDk" style={showDropDown ? {visibility : "visible" } : {visibility : "hidden"}}>
    <Link to="/profile">
    <div id="drop_downItem1">
    <Avatar className="navbar-img" style={{"maxWidth":"18px", "maxHeight":"18px"}} src="" />
    <p style={{marginTop : "6%"}}>Profile</p>
    </div></Link>
    <div id="drop_downItem3">
    <ClassIcon style={{marginLeft:"5%"}}/>
    <p style={{marginLeft:"4%"}}>Saved</p>
    </div>
    <Link to="/profile">
    <div id="drop_downItem2">
    <SettingsIcon style={{marginLeft:"5%"}}/>
    <p style={{marginLeft:"4%"}}>Settings</p>
    </div></Link>
    <div id="drop_downItem4">
    <p style={{marginLeft:"4%", marginTop : "2%"}} onClick={()=>{
        localStorage.setItem('Auth',false)
        window.location.reload(false);
      }}>Log Out</p>
    </div>
    </div>
    </div>  
     </Grid>
     <Grid item xs={2}></Grid>
  </Grid>   
   
  </div>  

}

// class Navbar extends Component{
   
//    constructor(props){
//        super(props)
//        this.state={ }

//    }
//    render(){
    // const {Auth}=useContext(AuthProvider)
    // let user=JSON.parse(localStorage.getItem('UserD'))
//        return (
//           <div>
             
          //   <div className="navbar_content">
          //   <Grid container>
          //      {/* <Grid item xs={2}></Grid> */}
               
          //    <Link to="/"><Grid  item xs={3}><img className="insta-logo" src={insta_log} width="105px" alt="" /></Grid></Link> 
          //      <Grid item xs={3}>
          //        <input className="nav-searchbar" type="text" placeholder="Search" />
          //      </Grid>
              
          //      <Grid item xs={3} style={{display:"flex"}}>
          //    <Link to="/home"><img className="navbar-img" src={home}  width="25px" /></Link>    
          //    <Link to ="/chats"> <img className="navbar-img" src={message}  width="25px" /></Link>   
          //        <img className="navbar-img" src={find}  width="25px" />
               
          //     <Link to ="/notification"> <img className="navbar-img" src={react}  width="25px" /></Link>  
          //     <Link to ="/profile"> <Avatar className="navbar-img" style={{"maxWidth":"25px", "maxHeight":"25px"}} src={user.user.profile_pic} /></Link>
          //     <UploadPop/>
          //      </Grid>
          //      <Grid item xs={1}></Grid>
          //   </Grid>      
          //   </div>  
          // </div> 
//        )
//    }

// }
// export default Navbar;
