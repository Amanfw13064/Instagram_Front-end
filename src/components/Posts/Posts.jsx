import React, { useState } from "react";
import { Avatar } from "@mui/material";
import "./Posts.css";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Grid } from "@mui/material";
import share from '../../images/sharefinal.png'
import { red } from '@mui/material/colors';
import smile from "../../images/smile.png"
import axios from 'axios'
import comm from "../../images/combold.png"
import Picker from "emoji-picker-react"


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export const Posts=({id,PostImageUrl,userName,likes,user_profile,refresh,commentPost,postedBy})=>{
   const [comment,setcomment]=useState('')
   const [post,setPost]=useState(false)
  const user_id=localStorage.getItem('user_id')
  const [showPicker, setShowPicker]= useState(false);
  
 const onEmojiClick=(event,emojiObject)=>{
   setcomment(prev=>prev + emojiObject.emoji)
   setShowPicker(false)
 }
    
console.log("profile",user_profile)
  const Makelikes=(postid)=>{
       axios.patch(`https://instagrambackendd.herokuapp.com/post/${postid}/likes`,{
         likes:user_id
       }).then(({data})=>{

         refresh()
       })
  }
  const Makeunlikes=(postid)=>{
    axios.patch(`https://instagrambackendd.herokuapp.com/post/${postid}/unlikes`,{
      likes:user_id
    }).then(({data})=>{
      refresh()
    })
}
  const Makecomment=(postid)=>{
    axios.patch(`https://instagrambackendd.herokuapp.com/post/${postid}/comment`,{
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
            width="100%"
            height="615px"
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
  }}  icon={<FavoriteBorder id="befor-like" />} checkedIcon={<Favorite id="after-like" />} />:    <Checkbox onClick={()=>{
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
}}  icon={<FavoriteBorder  id="alr-befor-like"  />} checkedIcon={<Favorite  id="alr-after-like" />} />}
               
               <img className="Three-para" src={comm} />
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
             <div key ={i} className="post-comment" >

             <Avatar width="5px" height="5px" marginTop="20px" className="post-userlogo" src={e.profile_pic} />
             <h3 className="comment-user" style={{marginTop:"20px"}}>{e.name}</h3>
              <h3 id="com-2"  style={{marginTop:"20px"}} >{commentPost[i]}</h3>
              
              </div>    
        )
        )}    

            <div  className={showPicker? "emoji-div-comment":"emoji-div-hide" } > {showPicker && <div>
                       
                       <Picker width="60%" height="50%"
           onEmojiClick={onEmojiClick}
         />
                   
                   </div> }</div>

         <div id="comments">

           <div id="emoji">
           
             <img onClick={()=>setShowPicker(val => !val)} id="emoji-smile"  className="chat-input-logo"  src={smile} alt="" />
           </div>

           <div id="input-comment">
                <input value={comment}   className="post-comment-input" onChange={(e)=>{
              if(e.key==="Enter"){
                console.log("dfdfd")
              }
              setPost(true)
              setcomment(e.target.value)
            }} type="text" placeholder="Add a comment.." />
        
           
           </div>

           <div id= {post?"post-btn-tr":"post-btn"}>
             <div  onClick={()=>{
            Makecomment(id)
            setcomment('')
          }}>Post</div>
           
           </div>
        </div>
       
        
        </div>
      </div>
  
}
