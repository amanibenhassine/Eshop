import React ,{useState} from 'react'
import "./Register.css"
import axios from 'axios';
import {Link } from "react-router-dom"
const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = '/api/login';
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
		} catch (error) {
		console.log(err)
	};
}


  return (
    <div>
    <div className="signup_container" >
        <form  onSubmit={handleSubmit} className='form_container'>
            <h1>Login to Your Account</h1>
         
            <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className="input"
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className="input"
                
            />
            <Link to="/Home">
            
            <button type="submit" className="green_btn">
            sign in
            </button></Link>
        </form>
    </div>
</div>

);
  
};

export default Login;