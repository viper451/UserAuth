import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import TempDashboard from './pages/TempDashBoard'
import Home from './pages/Home'


const App = () => {
	return (
		<div>
			<BrowserRouter>
			 <Routes>
			    <Route path ="/" exact element={<Home/>}/>
				<Route path="/login" exact element={<Login/>} />
				<Route path="/register" exact element={<Register/>} />
				<Route path="/dashboard" exact element={<Dashboard/>} />
				<Route path="/tempdashboard" exact element={<TempDashboard/>}/>

			 </Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
