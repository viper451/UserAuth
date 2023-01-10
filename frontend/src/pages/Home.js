import React from 'react';
import { Button } from '@mui/material';

function Home(props) {
    const changeRoute=async()=>{
        window.location.href='/login'
    }
    return (
        <div>
        <Button onClick={changeRoute}>LOGIN</Button>
        </div>
    );
}

export default Home;