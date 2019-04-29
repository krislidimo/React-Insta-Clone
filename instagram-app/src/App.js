import React from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      postData: dummyData
    }
  };

  render() {
    return (
      <div className="App">
        {this.state.postData.map(post => {
          return <PostContainer key={post.id} post={post}/>
        })}
      </div>
    );
  }
}

export default App;
