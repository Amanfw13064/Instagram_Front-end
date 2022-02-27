
import './App.css';
import Home from "./components/Homepage/Homepage"
import {Routes, Route} from "react-router-dom"

import {Chats} from "./components/Chats/Chats"
import {Navbar} from "./components/Navbar/Navbar"

// import Chats from "./components/Chats/Chats"
// import Navbar from "./components/Navbar/Navbar"
import {Login} from './components/Login'
import {Signup} from './components/Signup'
import {ProfileFinal} from './components/UserProfile/UserProfile'
import {ProfileSuggest} from "./components/UserProfile/UserProfileDIv"


function App() {
  return (
    <div className="App">
   {/* <Navbar/>  */}
   {/* <Navbar/> */}

    <Routes>
     <Route path="/" element={<Login/>}></Route>
     <Route path="/signup" element={<Signup/>}></Route>
     <Route path="/home" element={<Home/>}></Route>
     <Route path="/chats" element={ <Chats/>}></Route> 
     <Route path="/profile" element={<ProfileFinal/>}></Route> 
     <Route path="home/userDiv/:id" element={<ProfileSuggest/>}></Route> 
     
    </Routes>
       
        {/* <Chats/> */}
    </div>
  );
}

export default App;
