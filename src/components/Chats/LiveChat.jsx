import {Grid, Avatar} from "@mui/material"
// import ScrollToBottom from 'react-scroll-to-bottom';
import "./LiveChat.css"
import heart from'../../images/heart.png'
import smile from'../../images/smile.png'
import gallery from'../../images/gallery.png'
import icon from'../../images/icon.png'
import React, {useState, useEffect,useRef} from "react"
import io from "socket.io-client"
export const LiveChat=()=>{
   const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  //  const arr=[1,2,3]
  const socketRef = useRef();


 
    
 

  useEffect(() => {
    socketRef.current = io.connect('/');

    socketRef.current.on("your id", id => {
      setYourID(id);

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
               
                 <Avatar src="data:image/jpeg;base64,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" className="chat-header-logo" />
               </Grid>
               <Grid item xs={9} >
                  <div className="chat-header-username">Samayra</div> 
               
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
            
          
                   
        
        </div>

        


        <div  className="live-chat-input">
        <div  className="mainContainer">
          
           <Grid display="flex" container>
         <Grid item xs={1}>
         <img  className="chat-input-logo"  src={smile} alt="" />
         </Grid>
         <Grid item xs={9}>
          
          <input value={message} onChange={handleChange} onKeyPress={handleKeyPress} className="input-box" type="text"  placeholder="Mesaage.." />
      
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