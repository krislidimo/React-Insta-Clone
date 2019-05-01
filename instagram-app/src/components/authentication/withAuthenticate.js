import React from 'react';

const withAuthenticate = PostsPage => LoginPage  => 
	class extends React.Component {
		constructor() {
			super();
			this.state = {
				loggedIn: false
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

		render() {
			return (
				this.state.loggedIn ? <PostsPage /> : <LoginPage />
			);
		}
	};

export default withAuthenticate;