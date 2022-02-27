import React from "react";
import "./Pro.css";
import "./secNav.css"
import { BsFillChatFill } from 'react-icons/bs';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { BiBadge } from "react-icons/bi"
import { FaRegBookmark } from 'react-icons/fa';
import { BiGrid } from "react-icons/bi";
import { BiUserPin } from "react-icons/bi";
import axios from 'axios'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import {Navbar}  from "../Navbar/Navbar"
import {useParams} from "react-router-dom"


//popup
import  { useState,useEffect,useRef } from 'react';
import  Popup from './PopUp';
//import UploadPop from "./UploadPopup";

import styled from 'styled-components';


const Button = styled.button`
border: none;
background-color: transparent;

`;
export const ProfileSuggest = () => {
    
  const [isOpenFallowing, setIsOpenFallowing] = useState(false);
  const [isOpenFallower, setIsOpenFallower] = useState(false);
  const [loading,setloading]=useState(true)

  

  const {id} = useParams()
  console.log(id, "this is our id")
   const ref=useRef()
  const toggleFollowers = () => {
    setIsOpenFallower(!isOpenFallower);
  }
  let user_id=localStorage.getItem('user_id')
  const [data,setdata]=useState()
  useEffect(()=>{
      getData()
      getPost()
      timeout()
  },[])
  
     const getData=()=>{
      axios.get(`https://instagrambackendd.herokuapp.com/user/${id}`).then(({data})=>{
        setdata(data)
       
      }) 
     }
     var user_post=[]
  const getPost=()=>{
    axios.get('https://instagrambackendd.herokuapp.com/post').then(({data})=>{
         for(let i=0;i<data.length;i++){
               if(data[i].user_id._id===id){
                user_post.push(data[i])
               }
         }
        //  setuserPost(user_post)
        console.log(user_post) 
        ref.current={user_post}
        console.log("use",ref.current)   
    }) 
  }
  
  const timeout=()=>{
   setTimeout(()=>{
      setloading(false)
   },2000)
  }



  const toggleFollowing = () => {
    setIsOpenFallowing(!isOpenFallowing);
  } 
  return loading? <Box sx={{ width: '100%' }}>
  <LinearProgress />
</Box>: (
    <div>
    <Navbar/>
      <header>
        <div className="container">
          <div className="profile">
            <div className="profile-image">
              <img style={{width:"150px",height:"150px",borderRadius:"80px"}}
                src={data.profile_pic}
                alt=""
               
              />
            </div>

            <div className="profile-user-settings">
              <h1 className="profile-user-name">{data.username}</h1>

             
              <button
                className="btn profile-settings-btn"
                aria-label="profile settings"
                id= "Settings"
              >
               <BiBadge />
              </button>
            </div>

            <div className="profile-stats">
              <ul>
                <li>
                  <span className="profile-stat-count"> {ref.current.user_post.length} posts </span> 
                </li>
                <li>
                <Button  onClick={toggleFollowers} ><span className="profile-stat-count">{data.follower.length} followers </span>  </Button>
                </li>

                
   
   {isOpenFallower && <Popup
     content={<>
       <h3 className="fallowTitle">Followers</h3>
       <div className="line"></div>
       
     {data.follower.map(e=>(
       <div style={{display:"flex" ,justifyContent:"space-between" , margin:"1.3rem 0"}}>
       <div>
           <img style={{width:"40px",height:"40px",borderRadius:"80px"}} src={e.profile_pic} alt=""/> 
          
       </div>
       
       <div>
       <p className="username">{e.username}</p>
       </div>
       <div>

       </div>
       <div>

       </div>
       <div>
           <button className="fallowBtn">Follow</button>
       </div>
   </div>
     ))}
     
     </>}
     handleClose={toggleFollowers}
   />}

                <li>
                <Button  onClick={toggleFollowing} > <span className="profile-stat-count">{data.following.length} following</span>  </Button>
                </li>
   {isOpenFallowing && <Popup
     content={<>
      
       <p className="fallowTitle">Following</p>
       <div class="line"></div>
       {/* <hr color="#DCDCDC"/> */}
      
       <br/> 
    {data.following.map(e=>(
        <div style={{display:"flex" ,justifyContent:"space-between" , margin:"1.3rem 0"}}>
        <div>
            <img style={{width:"40px",height:"40px",borderRadius:"80px"}} src={e.profile_pic} alt=""/> 
           
        </div>
        <div>
        <p className="username">{e.username}</p>
        </div>
        <div>

        </div>
        <div>

        </div>
        <div>
            <button className="fallowBtn" id="buttonfallow">unfollow</button>
        </div>
    </div>
    ))}
     
     </>}
     handleClose={toggleFollowing}
   />}
 
              </ul>
            </div>

            <div className="profile-bio">
              <p>
                <span className="profile-real-name">{data.name} </span> 
               
               <div id="probio">  Life on weels 📷✈️🏕️ </div>
              </p>
            </div>
          </div>
        </div>
      </header>
      <div id="lineNav"></div>

      <div>

      <nav className="navigation-bar">
  <ul className="nav-item">
    <li className="item">
        {/* <BsFillGrid3X3GapFill />   */}
        <BiGrid className="navIcon"/>    <span className="navText">  POSTS </span>
    </li>
    <li className="item">
    <FaRegBookmark className="navIcon"/>   <span className="navText"> SAVED </span>
    </li>
    <li className="item" >
       <BiUserPin className="navIcon"/>    <span className="navText">  TAGGED </span>
    </li>
  </ul>
</nav>
      </div>

      <main>
        <div className="container">
          <div className="gallery">

          {ref.current.user_post.map(e=>(
            <div className="gallery-item" tabindex="0">
            <img
              src={e.picture}
              className="gallery-image"
              alt=""
            />

            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <span className="visually-hidden">Likes:</span>
                  <BsFillSuitHeartFill /> {e.likes.length}
                </li>
                <li className="gallery-item-comments">
                  <span className="visually-hidden">Comments:</span>
                    <BsFillChatFill /> {e.comment.length}
                </li>
              </ul>
            </div>
          </div>
          ))}
</div>
        </div>
      </main>
    </div>
  );
};


