import { useState,useEffect,useCallback  } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
	const navigate = useNavigate()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [button,setButton]=useState(0)
	const [loggedIn,setIsLoggedin]=useState()
	const [info,setInfo]=useState([])

	async function registerUser(event) {
		event.preventDefault()
        // setButton(button+1)
		const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})
         
		const data = await response.json()

		if (data.status === 'ok') {
			//  navigate('/register')
			 alert("SUCCESS")
		}
	}


		useEffect(() => {

			async function FetchData(){
	 	let response =  await fetch('http://localhost:1337/api/fetchdata')
	 	response  = await response.json() 
	 	setInfo(response)
		console.log(info.details)
			
			}
			FetchData()
	
		  }, [button]);
	
		  console.log(info.details)

	return (
		<div>
			<h1>Register</h1>
			<form onSubmit={registerUser}>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Name"
				/>
				<br />
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
				<input type="submit" value="Register" onClick={(button) => (button+1)} />
			</form>
			{info.details?.map((data) => (
				<h3>{data.name}</h3>
      
        ))}
		</div>
	)
}

export default App
