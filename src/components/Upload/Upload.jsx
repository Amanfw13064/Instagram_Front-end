
import React, { useState} from "react";
//import { set } from "react-hook-form";
import "./UploadPopup.css"
import Upload from "./UploadPopupBox";
import Picker from 'emoji-picker-react';
import { BsEmojiSmile } from 'react-icons/bs';
// import { EmojisFn } from './EmojiFile';

//import { EmojisFn } from './EmojiFile';
import { AiOutlinePlusSquare } from "react-icons/ai"
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export const UploadPop =()=>{

    const [isOpenUpload, setIsOpenUpload] = useState(false);
    const [loading,setloading]=useState(false)

    const togglePopupUpload = () => {
      setIsOpenUpload(!isOpenUpload);
    }
    const [chosenEmoji, setChosenEmoji] = useState([]);
    const [showEmoji, setShowEmoji] = useState(false);

    const onEmojiClick = (event, emojiObject) => {
      setChosenEmoji([...chosenEmoji, emojiObject]);
    };
    const handleEmoji = () => {
        setShowEmoji(!showEmoji);
    }
   
    const [text, setText] = useState("");
    const handleChange2 = (e) => {
        setText(e.target.value);
    }
    const handleSubmit2 = (e) => {
        e.preventDefault();
    }
    
 
  const [file, setFile] = useState("")
  const [preview, setPreview] = useState("") 
  const handleChange = (event) => {
    const selectedFile = event.target.files[0]; 
   // console.log(event.target.files)
    setFile(selectedFile)
    const filePreview = URL.createObjectURL(selectedFile) 
    setPreview(filePreview) 
  }
let user_id=localStorage.getItem('user_id') 
const handleSubmit = () =>{ 
  setloading(true) 
  var data=new FormData() 
  data.append('picture',file) 
  data.append('title',text) 
  data.append('user_id',user_id) 
  fetch('https://instagrambackendd.herokuapp.com/post',{
    method:"POST", 
    body:data, 
  }).then(res=>res.json()).then(data=>{
    setloading(false)
    console.log(data)
  }).catch(err=>{
    console.log(err)
  })
}
    return loading?   <Box sx={{ width: '100%' }}>
    <LinearProgress />
  </Box>: (
        <>
        {/* <button onClick={togglePopupUpload}>Upload</button> */}
        
        <AiOutlinePlusSquare style={{
          fontSize:"30px",margin:"10px"
        }}  onClick={togglePopupUpload}/>

<div>
   
   {isOpenUpload && <Upload
     content={<>
       <div>  <p id="createPost">Create new post </p>
       <hr color="	#DCDCDC"/>
       </div>
      <div id="PopUpFlex"> 
     
      <div className="rightPop" style={{flex:"3"}}>
     
     <div>

     <div style={{textAlign: "center"}}>
    
  
    {file && <img src={preview} alt={file.name} style={{width:"100%", maxHeight:"50vh"}}/>}
         <form  onSubmit={(e)=>{
           e.preventDefault()
          handleSubmit()  
         }}> 
         
          <input id="UploadButton" type="file" name="file"  style={{color:"white"}}
          // onChange={(e) => console.log(e.target.file)} 
         onChange={(e) => handleChange(e)}  
          />
         <button id="shareBtn" type="submit">Share</button>
       
         {/* <div className="loader"></div> */}
         </form>
    
         </div>
     </div>
     </div>
      <div className="leftPop" style={{flex:"2"}}>
      <div style={{display:"flex" ,justifyContent:"flex-start" , margin:"1rem"}}>
         {/* <div>
             <img style={{width:"35px",height:"35px",borderRadius:"80px" ,marginRight:"2rem"}} 
             src="https://media.istockphoto.com/photos/digital-technology-software-development-iot-internet-of-things-picture-id1341175431" alt=""/> 
            
         </div> */}
         <div>
         {/* <h3>Liza Koshy</h3> */}
         </div>
        
    
     </div>
    

     


     <div style={{marginLeft:"1.3rem", fontSize:"20px", color:"grey"}}>
      {/* <BsEmojiSmile /> */}
      {/* <EmojisFn/> */}
    
    <form onSubmit={handleSubmit2}>

    <div> 
<div>
{/* <BiMap /> */}
  <input type="text" id="locationInp" placeholder="Add Location "/>
 
</div>
        <div>
        <select className="select">
  <option>accessibility</option>
</select>
        </div>

        <div>
        <select className="select">
  <option>advanced settings</option>
</select>
        </div>
     </div>

     <div id="textContainer">
        <p> {text}{chosenEmoji ? chosenEmoji.map((e) => e.emoji) : null } </p>
    </div>
    <BsEmojiSmile className='react-icons' onClick={handleEmoji} />
    <input type="text" id="caption" placeholder={"Write a Caption..."} onChange={handleChange2}/>
    
  
    
    
    <div className='emojiDiv' style={(showEmoji ? {visibility : "visible"} : {visibility : "hidden"})}>
    <Picker onEmojiClick={onEmojiClick} />
    </div>
   
    </form> 
     </div>

   
   
    
     </div>

     </div>

     </>}
     handleClose={togglePopupUpload}
   />}


   
 </div>
        
        </>
    )
}

export default UploadPop;
