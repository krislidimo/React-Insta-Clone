import React from 'react';

import './LoginPage.css';

const LoginPage = () => {
	return (
		<form className="login-page">
			<h2>Login</h2>
			<input className="username" type="text" placeholder="Username" />
			<input className="password" type="text" placeholder="Password" />
			<button className="login-btn" >Login</button>
		</form>
	);
}

export default LoginPage;