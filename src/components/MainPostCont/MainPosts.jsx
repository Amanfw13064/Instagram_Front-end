// import React, { Component, useEffect } from "react";
 import {Component,useEffect,useState} from 'react'
import "./MainPosts.css";
import {Posts} from "../Posts/Posts";
import axios from 'axios'
export const MainPosts=()=>{
  const [Post,setPost]=useState([])
 useEffect(()=>{
   getPost()
 },[])
 const getPost=()=>{
       axios.get('http://localhost:5000/post').then(({data})=>{
         setPost(data)
       })
 }
   return <div>
    {Post.map(e=>(
       <Posts id={e._id} postedBy={e.postedBy} commentPost={e.comment} refresh={getPost} user_profile={e.user_id.profile_pic} userName={e.user_id.name} PostImageUrl={e.picture} likes={e.likes}/>
    ))}
  </div>
}

