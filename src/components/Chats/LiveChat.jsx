import {Grid, Avatar} from "@mui/material"
import ScrollToBottom from 'react-scroll-to-bottom';
import "./LiveChat.css"
import heart from'../../images/heart.png'
import smile from'../../images/smile.png'
import gallery from'../../images/gallery.png'
import icon from'../../images/icon.png'
import React, {useState, useEffect,useRef} from "react"
import io from "socket.io-client"
import Picker from "emoji-picker-react"
export const LiveChat=({value})=>{
  console.log(value)
   const [yourID, setYourID] = useState();
   const [showPicker, setShowPicker]= useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
   const arr=[1,2,3]
  const socketRef = useRef();


 const onEmojiClick=(event,emojiObject)=>{
   setMessage(prev=>prev + emojiObject.emoji)
   setShowPicker(false)
 }
    
 

  useEffect(() => {

    socketRef.current = io.connect('https://livechatmessage.herokuapp.com/');


    socketRef.current.on("your id", id => {
      setYourID(id);

   
    //   console.log(visible)
    },[messages])
    
    socketRef.current.on("message", (message) => {
      console.log("here",message);
      receivedMessage(message);
        
  
    })
  }, []);

  function receivedMessage(message) {
     
    setMessages(oldMsgs => [...oldMsgs, message]);
  }

  function sendMessage(e) {
    e.preventDefault();
  
    const messageObject = {
      body: message,
      id: yourID,
    };
    setMessage("");
    socketRef.current.emit("send message", messageObject);
  }

  function handleChange(e) {
     
    setMessage(e.target.value);
  }
   
  const  handleKeyPress = (e) => {
  if(e.key === 'Enter'){
     e.preventDefault();
  
    const messageObject = {
      body: message,
      id: yourID,
    };
    setMessage("");
    socketRef.current.emit("send message", messageObject);
  }
}
 
   


    return (
     <div>

        {/* User details with whom we are chating */}
        
        <div className="live-chat-header">
            
          <Grid container>
              
               <Grid item xs={1}>
               

                 <Avatar src= {value.profile_pic} className="chat-header-logo" />

          

               </Grid>
               <Grid item xs={9} >
                  <div className="chat-header-username">{value.username}</div> 
               
               </Grid>
               <Grid item xs={1}><Avatar className="chat-header-logo" src={icon}/></Grid>
                <Grid item xs={1}></Grid>
              
            
          </Grid>


        
        </div>



        {/* Mapping and working of all the message Live chat */}
       
        <div   className="real-time-chatbox">
           {messages.map((message, index)=>{

              
               if(message.id=== yourID ){
                   return(
                        <div className="message right" key ={index}>
                         {message.body}
                    </div >
                   )


               }
               return(
                    <div  className="message left" key={index}>{message.body}</div>
               )
           })}
            
          
                   <div  className={showPicker? "emoji-div":"emoji-div-hide" } > {showPicker && <div>
                       
                       <Picker width="60%" height="50%"
           onEmojiClick={onEmojiClick}
         />
                   
                   </div> }</div>
        
        </div>

        


        <div  className="live-chat-input">
        <div  className="mainContainer">
          
           <Grid display="flex" container>
         <Grid item xs={1}>
         <img onClick={()=>setShowPicker(val => !val)}  className="chat-input-logo"  src={smile} alt="" />
        
         </Grid>
         <Grid item xs={9}>
          
          <input  value={message} onChange={handleChange} onKeyPress={handleKeyPress} className="input-box" type="text"  placeholder="Mesaage.." />
      
         </Grid>
         <Grid  display="flex" item xs={2}>
            <img  className="chat-input-logo"  src={gallery} alt="" />
            <img  className="chat-input-logo"  src={heart} alt="" />
         </Grid>
         
         
         </Grid>
        
        
        
        </div>
        
        
        
        </div>
       
       
     
     
     
     </div>
      


    )




}