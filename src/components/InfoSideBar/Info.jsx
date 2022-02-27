// import React ,{Component} from "react"
import "./Info.css"
import {Avatar} from "@mui/material"


export const InfoSidebar=()=>{
    let user=JSON.parse(localStorage.getItem('UserD'))
    return  (

    <div>
   
     <div className="info_container">         
    <Avatar src={user.user.profile_pic} className="info_image"/>
    <div className="info_content">
    <div className="info_username">{user.user.name}</div>
    <div className="info_desc">Description</div>
    </div>
</div>  
    </div>



    )
    
   
   
}


