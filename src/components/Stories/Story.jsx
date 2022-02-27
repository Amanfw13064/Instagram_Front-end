import React, { useEffect, useState } from 'react'
import "./Story.css"
import {Avatar} from "@mui/material"
import axios from 'axios'

export const Stories=()=>{
  const [data,setdata]=useState([])
  useEffect(()=>{
   axios.get('https://instagrambackendd.herokuapp.com/user').then(({data})=>{
       setdata(data)
       localStorage.setItem('user_data',JSON.stringify(data))
   })
  })
  return (

  <div>
  
     
      <div className="story-section">
  {
      data.map((e,i)=>(
           <div key ={i} className= "story-div">
   <Avatar className="story-logo" src={e.profile_pic}/>
   <div className="story-text">{e.username}</div>
 </div>) )
  }
  
  </div>
  
  
  </div>



  )
  
 
}

