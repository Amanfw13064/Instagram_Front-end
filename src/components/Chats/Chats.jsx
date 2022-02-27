
import React from 'react'
import {useState} from "react"
import {Grid ,Avatar} from "@mui/material"
import arrow from '../../images/arrow dropdown.png'
import note from "../../images/notepad.png"
import "./Chats.css"
import {LiveChat} from "./LiveChat"
import {SendMessage} from './SendMessage/SendMessage'
import {Navbar}  from "../Navbar/Navbar"
export const Chats=()=>{
  const [UserData, setUserData]= useState([])
   const [ShowChats, setShowChats]= useState(false)
   const [Details,setDetails]=useState([])
   const  handleClick=(e)=>{
    setShowChats(true)
    console.log(e)
    setDetails(e)
    
  }
  let user=JSON.parse(localStorage.getItem('UserD'))
  const userData=JSON.parse(localStorage.getItem('user_data'))
  return <div id="Chats-adj">
   <Navbar/>
  <Grid marginTop="25px"  height="600px"container>
    <Grid  item xs={2}></Grid>
    <Grid className="chat-conatiner" display="flex" item xs={8} >
    <Grid className="all-chats"  item xs={4}>
       <div className= "user-chat-details">
         <Grid  marginTop="5%" display="flex" conatiner>
            <Grid item xs={4}></Grid>
            <Grid display="flex" item xs={4}>
               <div className="userchat"> {user.user.name}</div>
               <div><img className="arrow-img" src={arrow} alt="" /> </div>
            </Grid>
            <Grid   marginRight="25px" item xs={4}>
            <div className="note">
             <img  align="right" width="20px" src={note}  alt="" />
            </div>
            </Grid>                
         </Grid>              
       </div>
         {/* All chats */}
        <div className="all-chats-here">
           {userData.map((e,i)=>(
               <Grid  onClick={()=>{handleClick(e)}} value={e} key={i} className="chat-box-container"  container>
             <Grid display="flex">
              < Avatar src={e.profile_pic} className ="chat-logo"/>
              <div className="chat-tetx">
                <div className="person-chat">{e.username}</div>
                <div className="sent-time">Sent</div>    
             </div>                            
             </Grid>
         </Grid>
           ))}
        </div>
      {/* CHat box */}
    </Grid>
    <Grid className="chat-box sendMsg" item xs={8}>
       <div>
       {ShowChats ?  <LiveChat value={Details}/>: <SendMessage/>}
       
       </div>
    </Grid>
   </Grid>
    <Grid  item xs={2}></Grid>
  </Grid>          
</div>
}

