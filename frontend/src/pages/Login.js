import { useState,useEffect,useCallback } from 'react'
import jwt_decode from "jwt-decode"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [info,setInfo]=useState([])
	const [user,SetUser]=useState({})


	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})
		console.log(response)
		const data = await response.json()
		console.log(data)
    

		if (data.user) {
	
			localStorage.setItem('token', data.user)
		 localStorage.setItem('name',data.name)
			alert('Login successful')
			  window.location.href = '/tempdashboard'
		} else {
			alert('Please check your username and password')
		}
	}



	function handleCallbackResponse(response)
  {
       console.log("ENCODE JWT TOKEN "+response.credential);
       var useObject=jwt_decode(response.credential)
  
       SetUser(useObject)
	 console.log(useObject)

	
	   localStorage.setItem('token', useObject.jti)
	   localStorage.setItem('name',useObject.name)
		  alert('Login successful')
			window.location.href = '/tempdashboard'
	
	  
   
  }
  function handleSignOut(event){
    SetUser({})

  }




  useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
      client_id:"450354431642-n5er1tmvlstd1f29k73vb7c3meoc7vsv.apps.googleusercontent.com",
      callback:handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme:"outline",size:"large"}
    );

    google.accounts.id.prompt();
  },[]);

	
	  
  
	return (
		<div>
			{/* <h1>Login</h1>
			<form onSubmit={loginUser} >
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input type="submit" value="Login" />
			</form>
			{/* <h3>{info}</h3> */}
			{/* <div id='signInDiv'></div> */} 
     
	 {/* {user &&

		<>
		 <button onClick={(e)=>handleSignOut(e)}>SIGN OUT</button>
		<img src={user.picture}></img><h3>{user.name}</h3></>
	 } */}

<div className="Auth-form-container">
      <form className="Auth-form" onSubmit={loginUser}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email" 
              className="form-control mt-1"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
            	value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
        
              className="form-control mt-1"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" value="Login">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>







   </div>
		
	)
}

export default App
