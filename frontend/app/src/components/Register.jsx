import React from 'react'
import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});


    const navigate = useNavigate();


    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "/api/register";
			const { data: res } = await axios.post(url, data);
			navigate("/Login");
			console.log(res.message);
		} catch (error) {
			console.log("err")
		}
	};
  return (
   <div>
			<div>
				<div>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" >
							Sing in
						</button>
					</Link>
				</div>
				<div>
					<form  onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							
						/>
						
						<button type="submit" className="styles.green_btn">
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
 
export default Register