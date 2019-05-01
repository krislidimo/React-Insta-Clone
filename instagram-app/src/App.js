import React from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostsPage from './components/PostContainer/PostsPage.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      postData: [],
      filteredPostData: []
    }
  };

  componentDidMount() {
    this.setState({
      postData: dummyData
    });
  }

  filterPosts = event => {
    console.log(event.target);
    let posts = this.state.postData.filter(post => {if (post.username.includes(event.target.value)) {
      return post;
    }});
    this.setState({
      filteredPostData: posts
    });
    console.log(this.state.filteredPostData);
  }

  render() {
    return (
      <div className="App">
        <header className="main-header">
          <SearchBar filterPosts={this.filterPosts}/>
        </header>
        <PostsPage 
        postData={this.state.postData} 
        filteredPostData={this.state.filteredPostData} 
        />
      </div>
    );
  }
}

export default App;
