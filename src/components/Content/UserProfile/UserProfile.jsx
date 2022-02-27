import React from "react";
import "./Pro.css";
import "./UploadPopup"
import "./secNav.css"
import { BsFillChatFill } from 'react-icons/bs';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { BiBadge } from "react-icons/bi"
import { FaRegBookmark } from 'react-icons/fa';
import { BiGrid } from "react-icons/bi";
import { BiUserPin } from "react-icons/bi";


import { BiBookAlt } from "react-icons/bi";


//popup
import  { useState } from 'react';
import  Popup from './PopUp';
//import UploadPop from "./UploadPopup";

import styled from 'styled-components';


const Button = styled.button`
border: none;
background-color: transparent;

`;
const ProfileFinal = () => {
    
  const [isOpenFallowing, setIsOpenFallowing] = useState(false);
  const [isOpenFallower, setIsOpenFallower] = useState(false);
 

  const toggleFollowers = () => {
    setIsOpenFallower(!isOpenFallower);
  }

  const toggleFollowing = () => {
    setIsOpenFallowing(!isOpenFallowing);
  }
  
  return (
    <div>


      <header>
        <div className="container">
          <div className="profile">
            <div className="profile-image">
              <img style={{width:"150px",height:"150px",borderRadius:"80px"}}
                src="https://starsinformer.com/wp-content/uploads/2017/11/Liza-Koshy.jpg"
                alt=""
               
              />
            </div>

            <div className="profile-user-settings">
              <h1 className="profile-user-name">liza koshy</h1>

              <button className="btn profile-edit-btn">Edit Profile</button>

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
                  <span className="profile-stat-count"> 16</span> posts 
                </li>
                <li>
                <Button  onClick={toggleFollowers} ><span className="profile-stat-count">150</span> followers  </Button>
                </li>

                
   
   {isOpenFallower && <Popup
     content={<>
       <h3 style={{textAlign: "center"}}>Followers</h3>
       <hr color="	#DCDCDC"/>
     <div style={{display:"flex" ,justifyContent:"space-between" , margin:"1.3rem 0"}}>
         <div>
             <img style={{width:"40px",height:"40px",borderRadius:"80px"}} src="https://media.istockphoto.com/photos/digital-technology-software-development-iot-internet-of-things-picture-id1341175431" alt=""/> 
            
         </div>
         <div>
         <p>Ruku</p>
         </div>
         <div>
             <button className="fallowBtn">Fallow</button>
         </div>
     </div>
     <div style={{display:"flex" ,justifyContent:"space-between" , margin:"1.3rem 0"}}>
         <div>
             <img style={{width:"40px",height:"40px",borderRadius:"80px"}} src="https://media.istockphoto.com/photos/digital-technology-software-development-iot-internet-of-things-picture-id1341175431" alt=""/> 
            
         </div>
         <div>
         <p>Ruku</p>
         </div>
         <div>
             <button>Fallow</button>
         </div>
     </div>
     <div style={{display:"flex" ,justifyContent:"space-between", margin:"1.3rem 0"}}>
         <div>
             <img style={{width:"40px",height:"40px",borderRadius:"80px"}} src="https://media.istockphoto.com/photos/digital-technology-software-development-iot-internet-of-things-picture-id1341175431" alt=""/> 
            
         </div>
         <div>
         <p>Ruku</p>
         </div>
         <div>
             <button>Fallow</button>
         </div>
     </div>
     <div style={{display:"flex" ,justifyContent:"space-between", margin:"1.3rem 0"}}>
         <div>
             <img style={{width:"40px",height:"40px",borderRadius:"80px"}} src="https://media.istockphoto.com/photos/digital-technology-software-development-iot-internet-of-things-picture-id1341175431" alt=""/> 
            
         </div>
         <div>
         <p>Ruku</p>
         </div>
         <div>
             <button>Fallow</button>
         </div>
     </div>
     </>}
     handleClose={toggleFollowers}
   />}

                <li>
                <Button  onClick={toggleFollowing} > <span className="profile-stat-count">200</span> following </Button>
                </li>

                
   
   {isOpenFallowing && <Popup
     content={<>
       <h3 style={{textAlign: "center"}}>Following</h3>
       <hr color="	#DCDCDC"/>
     <div style={{display:"flex" ,justifyContent:"space-between" , margin:"1.3rem 0"}}>
         <div>
             <img style={{width:"40px",height:"40px",borderRadius:"80px"}} src="https://media.istockphoto.com/photos/digital-technology-software-development-iot-internet-of-things-picture-id1341175431" alt=""/> 
            
         </div>
         <div>
         <p>Ruku</p>
         </div>
         <div>
             <button class="fallowingBtn">Following</button>
         </div>
     </div>
     <div style={{display:"flex" ,justifyContent:"space-between" , margin:"1.3rem 0"}}>
         <div>
             <img style={{width:"40px",height:"40px",borderRadius:"80px"}} src="https://media.istockphoto.com/photos/digital-technology-software-development-iot-internet-of-things-picture-id1341175431" alt=""/> 
            
         </div>
         <div>
         <p>Ruku</p>
         </div>
         <div>
             <button>Following</button>
         </div>
     </div>
     <div style={{display:"flex" ,justifyContent:"space-between", margin:"1.3rem 0"}}>
         <div>
             <img style={{width:"40px",height:"40px",borderRadius:"80px"}} src="https://media.istockphoto.com/photos/digital-technology-software-development-iot-internet-of-things-picture-id1341175431" alt=""/> 
            
         </div>
         <div>
         <p>Ruku</p>
         </div>
         <div>
             <button>Following</button>
         </div>
     </div>


     <div style={{display:"flex" ,justifyContent:"space-between", margin:"1.3rem 0"}}>
         <div>
             <img style={{width:"40px",height:"40px",borderRadius:"80px"}} src="https://media.istockphoto.com/photos/digital-technology-software-development-iot-internet-of-things-picture-id1341175431" alt=""/> 
            
         </div>
         <div>
         <p>Ruku</p>
         </div>
         <div>
             <button>Following</button>
         </div>
     </div>


     <div style={{display:"flex" ,justifyContent:"space-between", margin:"1.3rem 0"}}>
         <div>
             <img style={{width:"40px",height:"40px",borderRadius:"80px"}} src="https://media.istockphoto.com/photos/digital-technology-software-development-iot-internet-of-things-picture-id1341175431" alt=""/> 
            
         </div>
         <div>
         <p>Ruku</p>
         </div>
         <div>
             <button>Following</button>
         </div>
     </div>



     <div style={{display:"flex" ,justifyContent:"space-between", margin:"1.3rem 0"}}>
         <div>
             <img style={{width:"40px",height:"40px",borderRadius:"80px"}} src="https://media.istockphoto.com/photos/digital-technology-software-development-iot-internet-of-things-picture-id1341175431" alt=""/> 
            
         </div>
         <div>
         <p>Ruku</p>
         </div>
         <div>
             <button>Following</button>
         </div>
     </div>




     <div style={{display:"flex" ,justifyContent:"space-between", margin:"1.3rem 0"}}>
         <div>
             <img style={{width:"40px",height:"40px",borderRadius:"80px"}} src="https://media.istockphoto.com/photos/digital-technology-software-development-iot-internet-of-things-picture-id1341175431" alt=""/> 
            
         </div>
         <div>
         <p>Ruku</p>
         </div>
         <div>
             <button>Following</button>
         </div>
     </div>



     <div style={{display:"flex" ,justifyContent:"space-between", margin:"1.3rem 0"}}>
         <div>
             <img style={{width:"40px",height:"40px",borderRadius:"80px"}} src="https://media.istockphoto.com/photos/digital-technology-software-development-iot-internet-of-things-picture-id1341175431" alt=""/> 
            
         </div>
         <div>
         <p>Ruku</p>
         </div>
         <div>
             <button>Following</button>
         </div>
     </div>
     <div style={{display:"flex" ,justifyContent:"space-between", margin:"1.3rem 0"}}>
         <div>
             <img style={{width:"40px",height:"40px",borderRadius:"80px"}} src="https://media.istockphoto.com/photos/digital-technology-software-development-iot-internet-of-things-picture-id1341175431" alt=""/> 
            
         </div>
         <div>
         <p>Ruku</p>
         </div>
         <div>
             <button>Following</button>
         </div>
     </div>
     </>}
     handleClose={toggleFollowing}
   />}
 
              </ul>
            </div>

            <div className="profile-bio">
              <p>
                <span className="profile-real-name">liza.koshy</span> 
                <br />
                Lorem ipsum 📷✈️🏕️
              </p>
            </div>
          </div>
        </div>
      </header>
      
<hr width="67%" color="	#DCDCDC"/>
      <div>

      <nav className="navigation-bar">
  <ul className="nav-item">
    <li className="item">
        {/* <BsFillGrid3X3GapFill />   */}
        <BiGrid />     POSTS
       
    </li>
    <li className="item">
    <FaRegBookmark />    SAVED
    </li>
    <li className="item" >
       <BiUserPin />     TAGGED
    </li>
  </ul>
</nav>
      </div>

      <main>
        <div className="container">
          <div className="gallery">
            <div className="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <BsFillSuitHeartFill /> 56
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                      <BsFillChatFill /> 2
                  </li>
                </ul>
              </div>
            </div>

            <div className="gallery-item" tabindex="0">
              <img
                src="https://cdn.pixabay.com/photo/2022/01/30/19/46/school-6982073_960_720.jpg"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <BsFillSuitHeartFill /> 89
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                      <BsFillChatFill /> 5
                  </li>
                </ul>
              </div>
            </div>

            <div className="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-type">
              
                <span className="visually-hidden">Gallery</span>
                <BiBookAlt />
              </div>

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <BsFillSuitHeartFill /> 42
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                      <BsFillChatFill /> 1
                  </li>
                </ul>
              </div>
            </div>

            <div className="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-type">
                <span className="visually-hidden">Video</span>
                <i className="fas fa-video" aria-hidden="true"></i>
              </div>

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <BsFillSuitHeartFill /> 38
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                      <BsFillChatFill /> 0
                  </li>
                </ul>
              </div>
            </div>

            <div className="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-type">
                <span className="visually-hidden">Gallery</span>
               <BiBookAlt />
              </div>

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <BsFillSuitHeartFill /> 47
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                      <BsFillChatFill /> 1
                  </li>
                </ul>
              </div>
            </div>

            <div className="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <BsFillSuitHeartFill /> 94
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                      <BsFillChatFill /> 3
                  </li>
                </ul>
              </div>
            </div>

            <div className="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-type">
                <span className="visually-hidden">Gallery</span>
                <BiBookAlt />
              </div>

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <BsFillSuitHeartFill /> 52
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                      <BsFillChatFill /> 4
                  </li>
                </ul>
              </div>
            </div>

            <div className="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <BsFillSuitHeartFill /> 66
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                      <BsFillChatFill /> 2
                  </li>
                </ul>
              </div>
            </div>

            <div className="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-type">
                <span className="visually-hidden">Gallery</span>
                <i className="fas fa-clone" aria-hidden="true"></i>
              </div>

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <BsFillSuitHeartFill /> 45
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                      <BsFillChatFill /> 0
                  </li>
                </ul>
              </div>
            </div>

            <div className="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <BsFillSuitHeartFill /> 34
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                      <BsFillChatFill /> 1
                  </li>
                </ul>
              </div>
            </div>

            <div className="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <BsFillSuitHeartFill /> 41
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                      <BsFillChatFill /> 0
                  </li>
                </ul>
              </div>
            </div>

            <div className="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-type">
                <span className="visually-hidden">Video</span>
                <i className="fas fa-video" aria-hidden="true"></i>
              </div>

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <BsFillSuitHeartFill /> 30
                   
                    
                   
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <BsFillChatFill />  2
                   
                    
                   
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="loader"></div>
        </div>
      </main>
    </div>
  );
};

export default ProfileFinal;
