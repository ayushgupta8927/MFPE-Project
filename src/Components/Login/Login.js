import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
// import LoginHeader from '../Header/LoginHeader.js';
import './Login.css';


const Login = () => {

    const [employeeId, setName] = useState(null);
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (localStorage.getItem("user-info")) {
    //         navigate("/Home");
    //     }
    // })

    async function handleSubmit(e) {
        // console.log(name, password);
        e.preventDefault();
        // const emp=parseInt(employeeId);
        console.log(employeeId,password);

        let postData = { employeeId, password };
        localStorage.setItem("Id", JSON.stringify(employeeId));

        await fetch("https://localhost:5003/api/Authenticate", {
            method: "POST",
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(postData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.status == 404) {
                    alert("Wrong UserName or Pasword");
                    window.location.reload();
                }
                localStorage.setItem("token", JSON.stringify(data));
                navigate("/Home")
            });

    }


    return (
        <>
		<div className="contain">
    	<div className="screen">
 		<div className="screen__content">
 			<form className="login">
       <h1>Login</h1>

 				<div className="login__field">
 					<i className="login__icon fas fa-user"></i>
 					<input type="number" className="login__input" onChange={(e) => setName(e.target.value)}
 placeholder="User name / Email"/>
 				</div>
 				<div className="login__field">
 					<i className="login__icon fas fa-lock"></i>
 					<input type="password" className="login__input" onChange={(e) => setPassword(e.target.value)}
 placeholder="Password"/>
 				</div>
 				<button className="button login__submit" onClick={(e) => handleSubmit(e)}>
 					<span className="button__text">Log In Now</span>
 					<i className="button__icon fas fa-chevron-right"></i>
 				</button>				
 			</form>
			
 		</div>
 		<div className="screen__background">
 			<span className="screen__background__shape screen__background__shape4"></span>
 			<span className="screen__background__shape screen__background__shape3"></span>		
 			<span className="screen__background__shape screen__background__shape2"></span>
 			<span className="screen__background__shape screen__background__shape1"></span>
 		</div>		
 	</div>
 </div>
{/*             
            <div className="loginForm">
                <h1 className="lead display-6">Sign in to continue</h1>
                <form >
                    <div>
                        <label htmlFor="employeeId">Employee Id</label>
                        <input
                            type="text"
                            name="employeeId"
                            id="employeeId"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password" />
                    </div>

                    <button type="submit" onClick={(e) => handleSubmit(e)} className="loginButton btn-btn-primary">Sign In</button>

                </form>
            </div> */}
        </>
    );
};

export default Login;


// async function handleSubmit() {
//     console.log(name, password);
//     let postData = { name, password };
//     await fetch("https://localhost:44369/api/Auth", {
//         method: "POST",
//         headers: new Headers({
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         }),
//         body: JSON.stringify(postData)
//     })
//         .then(response => response.json())
//         .then(result => {
//             localStorage.setItem("user-info", JSON.stringify(result));
//             console.log(result);
//             navigate("/Home")

//         })
//         .catch(error => {
//             alert("Error Occured");
//             window.location.reload();
//         });


// }

// import React from 'react'
// import './Login.css'
// function Login() {
//   return (
//     <div className="contain">
// 	<div className="screen">
// 		<div className="screen__content">
// 			<form className="login">
//       <h1>Login</h1>

// 				<div className="login__field">
// 					<i className="login__icon fas fa-user"></i>
// 					<input type="text" className="login__input" placeholder="User name / Email"/>
// 				</div>
// 				<div className="login__field">
// 					<i className="login__icon fas fa-lock"></i>
// 					<input type="password" className="login__input" placeholder="Password"/>
// 				</div>
// 				<button className="button login__submit">
// 					<span className="button__text">Log In Now</span>
// 					<i className="button__icon fas fa-chevron-right"></i>
// 				</button>				
// 			</form>
			
// 		</div>
// 		<div className="screen__background">
// 			<span className="screen__background__shape screen__background__shape4"></span>
// 			<span className="screen__background__shape screen__background__shape3"></span>		
// 			<span className="screen__background__shape screen__background__shape2"></span>
// 			<span className="screen__background__shape screen__background__shape1"></span>
// 		</div>		
// 	</div>
// </div>
//   )
// }

// export default Login