import React, {Component} from 'react'
import {Navbar} from '../Navbar/Navbar'
import Content from '../Content/Content'
import './Home.css'


class Home extends Component{
   
   constructor(props){
       super(props)
       this.state={ }

   }
   render(){
       return (<>
        <Navbar/>
          <div>
            <Content/>
          </div>
       </>
       )
   }
}
export default Home;
