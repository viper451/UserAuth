import React, { useState,useEffect } from "react";
import { Link, NavLink,useNavigate } from "react-router-dom";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';

const Navbar = () => {
  const [NavOpen,setNavOpen]=useState(false)
  const [isLoggedin, setIsLoggedin] = useState(true);
  const [userName,setUserName]=useState()

  useEffect(()=>{
     getUserName();
},[])
const getUserName=async()=>{
  if(localStorage.getItem('name')!=null)
  {
    setUserName(localStorage.getItem('name'))
  }
  else{
    alert("INVALID")
    window.location.href='/login'

  }
}

  const Navigate=useNavigate()
  const logout = () => {
    localStorage.clear();
    console.log("HEELO")
    setIsLoggedin(false);
    Navigate("/")
  };
  

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
    
          <h4><b>FLIPZONE</b></h4>
        </div>
        <div className="items">
         
        
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          {userName &&       <div className="item">
               {userName}
             </div> }
    
          <div className="item">
       <Button variant="contained" onClickCapture={logout} endIcon={<LoginIcon />}>
  LogOut
</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
