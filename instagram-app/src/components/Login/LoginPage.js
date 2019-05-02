import React from 'react';

import './LoginPage.css';

const LoginPage = props => {

	return (
		<form className="login-page" onSubmit={props.loginHandler}>
			<h2>Login Page</h2>
			<input 
				className="username" 
				name="username" 
				type="text" 
				value={props.currentUsername}
				onChange={props.udateInfo}
				placeholder="Username" 
			/>
			<input 
				className="password" 
				name="password" 
				type="text" 
				value={props.currentPassword}
				onChange={props.udateInfo}
				placeholder="Password" 
			/>
			<button type="submit" className="login-btn" onClick={props.loginHandler}>Login</button>
		</form>
	);
}

export default LoginPage;