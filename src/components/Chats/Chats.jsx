import React from 'react'
import {Grid ,Avatar} from "@mui/material"
import arrow from '../../images/arrow dropdown.png'
import note from "../../images/notepad.png"
import "./Chats.css"
import {LiveChat} from "./LiveChat"

export const Chats=()=>{
  let user=JSON.parse(localStorage.getItem('UserD'))
  const userData=JSON.parse(localStorage.getItem('user_data'))
  return <div>
        
  <Grid marginTop="25px"  height="600px"container>
   
    <Grid  item xs={2}></Grid>
    
    <Grid className="chat-conatiner" display="flex" item xs={8} >
    
    <Grid className="all-chats"  item xs={4}>
       
       <div className= "user-chat-details">
       
         <Grid  marginTop="5%" display="flex" conatiner>
            
            <Grid item xs={4}></Grid>
            <Grid display="flex" item xs={4}> 
               <div className="userchat"> {user.user.name}</div>
               <div><img className="arrow-img" src={arrow} alt="" /> </div>
            </Grid>
            <Grid   marginRight="25px" item xs={4}> 
            <div className="note">
             <img  align="right" width="20px" src={note}  alt="" />
            </div>
            
            </Grid>                 
         </Grid>               
       </div>

         {/* All chats */}
        <div className="all-chats-here">

           {userData.map((e,i)=>(
               <Grid key={i} className="chat-box-container"  container>
            
             <Grid display="flex">
             
              < Avatar src={e.profile_pic} className ="chat-logo"/>
              <div className="chat-tetx">
                <div className="person-chat">{e.username}</div>
                <div className="sent-time">Sent</div>    
             </div>                            
             </Grid>
         </Grid>

           ))}
 
        </div>
       
      {/* CHat box */}
    </Grid>
    <Grid className="chat-box" item xs={8}> 
       <div>
         <LiveChat/>
       </div>
    
    </Grid>
   </Grid>
 
    <Grid  item xs={2}></Grid>
 
  </Grid>           
</div>
}

// class Chats extends Component{
   
//    constructor(props){
//        super(props)
//        this.state={
//          UserData:[]
//         }
//    }
//      componentDidMount(){
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
//           this.setState({UserData:data})

//    }
//    render(){
//         return (
     
        //  <div>
        
        //    <Grid marginTop="25px"  height="600px"container>
            
        //      <Grid  item xs={2}></Grid>
             
        //      <Grid className="chat-conatiner" display="flex" item xs={8} >
             
        //      <Grid className="all-chats"  item xs={4}>
                
        //         <div className= "user-chat-details">
                
        //           <Grid  marginTop="5%" display="flex" conatiner>
                     
        //              <Grid item xs={4}></Grid>
        //              <Grid display="flex" item xs={4}> 
        //                 <div className="userchat"> Vishu_2391</div>
        //                 <div><img className="arrow-img" src={arrow} alt="" /> </div>
        //              </Grid>
        //              <Grid   marginRight="25px" item xs={4}> 
        //              <div className="note">
        //               <img  align="right" width="20px" src={note}  alt="" />
        //              </div>
                     
        //              </Grid>                 
        //           </Grid>               
        //         </div>

        //           {/* All chats */}
        //          <div className="all-chats-here">

        //             {this.state.UserData.map((item,index)=>(
        //                 <Grid key={index} className="chat-box-container"  container>
                     
        //               <Grid display="flex">
                      
        //                < Avatar src={item.imageUrl} className ="chat-logo"/>
        //                <div className="chat-tetx">
        //                  <div className="person-chat">{item.username}</div>
        //                  <div className="sent-time">Sent</div>
                       
        //               </div>      
                                          
        //               </Grid>
        //           </Grid>

        //             ))}
          
        //          </div>
                
        //        {/* CHat box */}
        //      </Grid>
        //      <Grid className="chat-box" item xs={8}> 
        //         <div>
        //           <LiveChat/>
        //         </div>
             
        //      </Grid>
        //     </Grid>
          
        //      <Grid  item xs={2}></Grid>
          
        //    </Grid>           
        //  </div>
//         )

// }
// }
// export default Chats