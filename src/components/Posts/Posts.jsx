import React, { useState } from "react";
import { Avatar } from "@mui/material";
import "./Posts.css";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Grid } from "@mui/material";
import share from '../../images/share.svg'
import { red } from '@mui/material/colors';
import axios from 'axios'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export const Posts=({id,PostImageUrl,userName,likes,user_profile,refresh,commentPost,postedBy})=>{
   const [comment,setcomment]=useState('')
  const user_id=localStorage.getItem('user_id')
 
console.log("profile",user_profile)
  const Makelikes=(postid)=>{
       axios.patch(`http://localhost:5000/post/${postid}/likes`,{
         likes:user_id
       }).then(({data})=>{

         refresh()
       })
  }
  const Makeunlikes=(postid)=>{
    axios.patch(`http://localhost:5000/post/${postid}/unlikes`,{
      likes:user_id
    }).then(({data})=>{
      refresh()
    })
}
  const Makecomment=(postid)=>{
    axios.patch(`http://localhost:5000/post/${postid}/comment`,{
      comment:comment,
      postedBy:user_id
    }).then(({data})=>{
      console.log(data)
      refresh()
    })
  }
  let lik=true
  if(likes.includes(user_id)){
      lik=false
  }

  return <div key={id}> 
   <div className="post-container">
       {/* logo and username */}
         <div className="post-header">
           <Avatar className="post-userlogo" src={user_profile} />
           <div className="post-username">{userName}</div>
         </div>

         <div>
         <img
            width="615px"
            src={PostImageUrl}
            alt=""
          />
        </div>
        
        <div>

           <div style={{marginLeft:"10px"}} >
             <Grid container>
               <Grid
                height="45px"
                width="25px"
                // border="1px solid red"
                item
                xs={4}
                display="flex"
              >
                {lik?<Checkbox onClick={()=>{
                      if(lik===true){
                        Makelikes(id,user_id)
                      }
                      else{
                        Makeunlikes(id,user_id)
                        
                      }
                }} {...label} 
              
  sx={{
    color: red[800],
    '&.Mui-checked': {
      color: red[600],
    },'& .MuiSvgIcon-root': { fontSize: 28 }
  }}  icon={<FavoriteBorder />} checkedIcon={<Favorite />} />:    <Checkbox onClick={()=>{
    if(lik===true){
      Makelikes(id)
    }
    else{
      Makeunlikes(id)
      
    }
}} {...label} 
defaultChecked 
sx={{
color: red[800],
'&.Mui-checked': {
color: red[600],
},'& .MuiSvgIcon-root': { fontSize: 28 }
}}  icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}
               
               <img className="Three-para" src={comment} />
                <img className="Three-para" src={share} />
              </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}></Grid>
            </Grid>
          </div>
          {/* Likes count */}
          <div  style={{"fontWeight":"bold","marginLeft":"25px"}} >
            {likes.length} likes
           </div>
        </div>

         {/* Comments section */}
        { 
        postedBy.map((e,i)=>(
             <div className="post-comment" ><Avatar className="post-userlogo" src={e.profile_pic} /><h3 style={{marginTop:"20px",color:"blue"}}>{e.name}</h3> <h3 style={{margin:"20px"}}>{commentPost[i]}</h3></div>    
        )
        )}    
            <input className="post-comment-input" onChange={(e)=>{
              if(e.key==="Enter"){
                console.log("dfdfd")
              }
              setcomment(e.target.value)
            }} type="text" placeholder="Add a comment.." />
          <input type="submit" onClick={()=>{
            Makecomment(id)
          }}></input>
        
        </div>
      </div>
  
}
