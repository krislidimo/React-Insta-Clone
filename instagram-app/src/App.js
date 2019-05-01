import React from 'react';
import PostsPage from './components/PostContainer/PostsPage.js';
import LoginPage from './components/Login/LoginPage.js';
import withAuthenticate from './components/authentication/withAuthenticate.js';

import './App.css';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  };

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate 
        postData={this.state.postData} 
        filteredPostData={this.state.filteredPostData}
        />
      </div>
    );
  }
}

export default App;
