import React, { Component, useEffect, useState } from 'react'
import "./Story.css"
import Vish from '../../images/IMG-20200405-WA0131.jpg'
import {Avatar} from "@mui/material"
import axios from 'axios'

export const Stories=()=>{
  const [data,setdata]=useState([])
  useEffect(()=>{
   axios.get('http://localhost:5000/user').then(({data})=>{
       setdata(data)
   })
  })
  return  <div className="story-section">
  {
      data.map((e,i)=>(
           <div key ={i} className= "story-div">
   <Avatar className="story-logo" src={e.profile_pic}/>
   <div className="story-text">{e.username}</div>
 </div>) )
  }
  
  </div>
}






// class Stories extends Component{
//     constructor(props){
//          super(props)
//     this.state={
//         Storydata:[]
//     }
//     }
//    componentDidMount(){
//        this.getData()
//    }
//    getData=()=>{
//       let data=[
//         {
//           "username":"Vishu_2391",
//           "imageUrl":"../../images/IMG-20200405-WA0131.jpg"  
//         },
//          {
//           "username":"Vishu_2391",
//           "imageUrl":"../../images/IMG-20200405-WA0131.jpg"  
//         },
//          {
//           "username":"Vishu_2391",
//           "imageUrl":"../../images/IMG-20200405-WA0131.jpg"  
//         },
//          {
//           "username":"Vishu_2391",
//           "imageUrl":"../../images/IMG-20200405-WA0131.jpg"  
//         },
//          {
//           "username":"Vishu_2391",
//           "imageUrl":"https://avatars.githubusercontent.com/u/82043560?v=4"  
//         },
//           {
//           "username":"Vishu_2391",
//           "imageUrl":"../../images/IMG-20200405-WA0131.jpg"  
//         },
//          {
//           "username":"Vishu_2391",
//           "imageUrl":"../../images/IMG-20200405-WA0131.jpg"  
//         },
//         {
//           "username":"Vishu_2391",
//           "imageUrl":"https://avatars.githubusercontent.com/u/82043560?v=4"  
//         },
//           ]
//           this.setState({Storydata:data})

//    }

// render(){
//     return (

    // <div>
    //    <div className="story-section">
    //    {
    //        this.state.Storydata.map((item,index)=>(
    //             <div key ={index} className= "story-div">
    //     <Avatar className="story-logo" src={item.imageUrl}/>
    //     <div className="story-text">{item.username}</div>
    //   </div>) )
    //    }
       
    //    </div>
    // </div>

//     )
// }
// }

// export default  Stories;