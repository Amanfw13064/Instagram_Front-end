import React, {useEffect, useState,useRef } from "react";
import "./Suggetion.css";
import { Avatar, Grid } from "@mui/material";
import axios from 'axios'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import {Link} from "react-router-dom"


export const Suggestion=()=>{
  const [loading,setloading]=useState(true)
  const ref=useRef()
const userData=JSON.parse(localStorage.getItem('user_data'))
 const user_id=localStorage.getItem('user_id') 
  useEffect(()=>{
    user()
  },[])
  let arr=[]
  const user=()=>{
    setloading(true)
    axios.get(`https://instagrambackendd.herokuapp.com/user/${user_id}`).then(({data})=>{

      for(let i=0;i<userData.length;i++){
        let count=0
        for(let j=0;j<data.following.length;j++){
           if(userData[i]._id===data.following[j]._id){
             count++
           }
           if(userData[i]._id===user_id){
             count++
           }
        }
        if(count===0){
          arr.push(userData[i])
        }
      }
      ref.current={arr}
       setloading(false)

    })
  }
  const makefollow=(_id)=>{
     axios.patch(`https://instagrambackendd.herokuapp.com/user/${user_id}/following`,{
       following:_id
     }).then(({data})=>{
     })
     axios.patch(`https://instagrambackendd.herokuapp.com/user/${_id}/follower`,{
       follower:user_id
     }).then(({data})=>{
     })
     user()
  }

  
  return loading? <Box sx={{ width: '100%' }}>
  <LinearProgress />
</Box>: <div className="suggestion-container">


  <Grid className="Grid-Sugg" container>
     <Grid item xs={6}>
         <div className="suggestion-text">Suggestions for you</div>
     </Grid>
      <Grid item xs={6}>
        <div className="suggestion-text2">See all</div>
      </Grid>
  
  </Grid>   
  <div className="suggestions-list">     
    {ref.current.arr.map((e,index)=>(
      
       <div key={index} className="suggestion-avtx">
         <Grid container>
           <Grid display="flex" item xs={8}>
              <Avatar className="suggested-avatar" src={e.profile_pic} />
             <Link id="no=dec" to={`userDiv/${e._id}`} ><div className="suggest-text">{e.name}</div></Link>
           </Grid>
           <Grid item xs={4}>
             <div onClick={()=>{
                   makefollow(e._id)
             }} className="follow-text ">Follow</div>
           </Grid>
         </Grid>
       </div>
      
    ))}
     </div>

  </div>
}


