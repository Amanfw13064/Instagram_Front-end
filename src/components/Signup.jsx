import "./styles/signup.css";
import { Link, useNavigate } from "react-router-dom";
 import { FaFacebookSquare } from "react-icons/fa"
import { useState } from "react";


export const Signup = () =>{
    const nav=useNavigate()
    // const [isSignedUp, setIsSignedUp] = useState(false);
    const initData = {email : "",name : "", username : "", password : ""};
    const [userData, setUserData] = useState(initData); 
    const handleChange = (e) => {
        const {name,value} = e.target;
        setUserData({...userData, [name] : value})
    }
    const PostUserData = () => {
        fetch("https://instagrambackendd.herokuapp.com/signup", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
        }).then(res=> res.json()).
        then((data) => {
            if(data.message=='User with that username already exists') {
               alert('User with that username already exists')
            } else {
                alert('Account Successfuly created please signin')
               nav('/')
            }
        }
        ).catch((error) => {
            console.log(error);
        })
    }
    return (
        <>
        <div id="container_3">
            <div id="container_3_1">
                {/*<h1>Instagram</h1>*/}
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" alt="Insta"/>
                <h4>Sign up to see photos and videos<br/> from your friends.</h4>
                
                <button id="fbBtn"><FaFacebookSquare/> Log in with Facebook</button>
                <h6>OR</h6>
                <input type="text" name="email" onChange={handleChange} placeholder="Mobile number or email address"/>
                <input type="text"  name="name" onChange={handleChange} placeholder="Full Name"/>
                <input type="text"  name="username" onChange={handleChange} placeholder="Username"/>
                <input type="password" name="password" onChange={handleChange} placeholder="Password"/><br/>
                <button id="signupBtn" style={(userData.email && userData.password && userData.username && userData.name) ? {backgroundColor: "#0095f6"} : {backgroundColor: "#b2dffc"} } onClick={PostUserData}>Sign Up</button>
                
                <p>By signing up, you agree to our,</p>
                <h6>Terms, Data policy and Cookie policy</h6>
            </div>
            <div id="container_3_2">
                <p>Have an account?</p>
                <Link to="/"><h5>Log in</h5></Link>
            </div>
            <div id="container_3_3">
                <p>Get the app.</p>
                <div>
                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"/>
                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"/>
                </div>
                
            </div>
        </div>
        <div id="footer">
                <p id="signupP1">Meta     About     Blog     Job     Help     API     Privacy     Terms     Top Account     Hashtags     Locations     Instagram Lite</p>
                <p id="signupP2">Dance     Food & Drink     Home & Garden     Music     Visual Arts</p>
            </div>
        </>
    )
}