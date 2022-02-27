import "./styles/login.css";
import { Link ,useNavigate,Navigate} from "react-router-dom";
 import { FaFacebookSquare } from "react-icons/fa"
import { useState,useContext } from "react";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import {AuthProvider} from '../Context/AuthContextProvider'

export const Login = () =>{
    const nav=useNavigate()
    const {handle}=useContext(AuthProvider)
    const initData = {username : "",password : ""};
    const [signedInData, setSignedInData] = useState(initData);
    const [loading,setloading]=useState(false)
    const handleChange = (e) => {
        const {name,value} = e.target;
        setSignedInData({...signedInData, [name] : value});
    }
    const HandleSignIn = () => {
        setloading(true)
        fetch("https://instagrambackendd.herokuapp.com/signin", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(signedInData)
        }).then(res=> res.json()).
        then((data) => {
            if(data.message=='Either username or password incorrect') {
                alert('Either username or password incorrect')
                setloading(false)
             }
             if(data.error){
                alert('Either username or password incorrect')
                setloading(false)
             }
              else {
                  localStorage.setItem("UserD",JSON.stringify(data))
                 localStorage.setItem("user_id",data.user._id)
                 
                 handle(true)
                 localStorage.setItem("Auth",true)
                 setloading(false)
                
                 nav('/home')

                //  setTimeout(()=>{
                //    
                //  },1000)
                 
           
             }     
        }
        ).catch((error) => {
            console.log(error);
        })
    }

    return loading? <Box sx={{ width: '100%' }}>
    <LinearProgress />
  </Box>: (
        <>
            <div id="container">
                <div id="container_1"><img src="https://i.ibb.co/D9YG1XW/LoginImg.png"/></div>
                <div id="container_2">
                    <div id="container_2_1">
                        {/*<h1>Instagram</h1>*/}
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" alt="Insta"/><br/>
                        <input type="text" name="username" onChange={handleChange} placeholder="Phone number, username or email address"/>
                        <input type="password" name="password" onChange={handleChange} placeholder="Password"/><br/>
                        <button style={(signedInData.username && signedInData.password) ? {backgroundColor: "#0095f6"} : {backgroundColor: "#b2dffc"}} onClick={HandleSignIn} >Log In</button>
                        <h6>OR</h6>
                        
                        <h5><FaFacebookSquare/> Log in with Facebook</h5>
                        <p>Forgotten your password?</p>
                    </div>
                    <div id="container_2_2">
                        <p>Don't have an account?</p>
                        <Link to="/signup"><h5 id="signUpLink">Sign up</h5></Link>
                    </div>
                    <div id="container_2_3">
                        <p>Get the app</p>
                        <div>
                            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"/>
                            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"/>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div id="footerLogin">
                <p id="loginP1">Meta     About     Blog     Job     Help     API     Privacy     Terms     Top Account     Hashtags     Locations     Instagram Lite</p>
                <p id="loginP2">Dance     Food & Drink     Home & Garden     Music     Visual Arts</p>
            </div>
        </>
    )
}