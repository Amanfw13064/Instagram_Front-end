import React, {Component} from "react"

import './Navbar.css'
import {Grid} from "@mui/material"
import insta_log from "../../images/logoinsta.png"
import home from "../../images/home.svg"
import message from "../../images/message.svg"
import react from "../../images/love.svg"
import find from '../../images/find.svg'
import Vish from '../../images/IMG-20200405-WA0131.jpg'
import {Avatar} from "@mui/material"
import{Link}  from "react-router-dom"
import {UploadPop} from '../Upload/Upload'

class Navbar extends Component{
   
   constructor(props){
       super(props)
       this.state={ }

   }
   render(){
       return (
          <div>
             
            <div className="navbar_content">
            <Grid container>
               {/* <Grid item xs={2}></Grid> */}
               
             <Link to="/"><Grid  item xs={3}><img className="insta-logo" src={insta_log} width="105px" alt="" /></Grid></Link> 
               <Grid item xs={3}>
                 <input className="nav-searchbar" type="text" placeholder="Search" />
               </Grid>
              
               <Grid item xs={3} style={{display:"flex"}}>
             <Link to="/home"><img className="navbar-img" src={home}  width="25px" /></Link>    
             <Link to ="/chats"> <img className="navbar-img" src={message}  width="25px" /></Link>   
                 <img className="navbar-img" src={find}  width="25px" />
               
              <Link to ="/notification"> <img className="navbar-img" src={react}  width="25px" /></Link>  
              <Link to ="/profile"> <Avatar className="navbar-img" style={{"maxWidth":"25px", "maxHeight":"25px"}} src={Vish} /></Link>
              <UploadPop/>
               </Grid>
               <Grid item xs={1}></Grid>
            </Grid>
            
            
            </div>
            
          
          
          </div> 
       )
   }

}
export default Navbar;
