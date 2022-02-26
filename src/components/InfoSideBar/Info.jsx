import React ,{Component} from "react"
import "./Info.css"
import {Avatar} from "@mui/material"

class InfoSidebar extends Component{
    constructor(props){
        super(props)
        this.state={ }
    }
    render(){
        return (
            <div>
             <div className="info_container">
             
                 <Avatar src="" className="info_image"/>
                 <div className="info_content">
                 <div className="info_username">Vishu_2391</div>
                 <div className="info_desc">Description</div>
                 </div>
             </div>
           
            
            
            </div>
        )
    }


}

export default InfoSidebar