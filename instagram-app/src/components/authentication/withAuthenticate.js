import React from 'react';

const withAuthenticate = PostsPage => LoginPage  => 
	class extends React.Component {
		constructor() {
			super();
			this.state = {
				loggedIn: false,
				username: "",
				password: ""
			};
		}

		componentDidMount() {
			if(localStorage.getItem('user')) {
				this.setState({
					loggedIn: true
				});
			} else {
				this.setState({
					loggedIn: false
				});
			}
		}

		loginHandler = event => {
			event.preventDefault();
			localStorage.setItem(this.state.username, this.state.password);
			console.log(localStorage.getItem(this.state.username));
			this.setState({
				loggedIn: true
			});
		};

		udateInfo = event => {
			this.setState({
				[event.target.name]: event.target.value
			});
		};

		render() {
			return (
				this.state.loggedIn ? <PostsPage /> : <LoginPage 
					currentUsername={this.state.username}
					currentPassword={this.state.password}
					udateInfo={this.udateInfo}
					loginHandler={this.loginHandler}
					/>
			);
		}
	};

export default withAuthenticate;