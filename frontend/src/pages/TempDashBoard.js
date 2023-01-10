import React,{useState,useEffect} from 'react';
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import UserDashboard from './home/UserDashboard';


function TempDashBoard(props) {

    const [Products,setProducts]=useState();
    const [Categories,setCategories]=useState();
    const [isLoggedin, setIsLoggedin] = useState(true);
    const navigate=useNavigate()
    const [userName,setUserName]=useState();


    useEffect(()=>{
        getProduct();
         getCategories();
         getUserName();
    },[])


    const getProduct=async ()=>{
  const value=await axios.get("https://api.escuelajs.co/api/v1/products")
        setProducts(value.data);
      
    }
 

    const getCategories=async()=>{
        const value=await axios.get("https://api.escuelajs.co/api/v1/categories")
        setCategories(value.data)
   
    }
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

    const logout=async()=>{
       localStorage.clear()
       window.location.href='/login'
         
    }


     console.log(Products)
     console.log(Categories)





//  console.log(Categories[1])
//      console.log(Products[index].category)
console.log(userName)
    return (
        <div>
<UserDashboard/>

        </div>
    );
}

export default TempDashBoard;