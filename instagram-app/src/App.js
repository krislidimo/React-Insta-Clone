import React from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      postData: [],
    }
  };

  componentDidMount() {
    this.setState({
      postData: dummyData
    }); 
  }

  // updateComments(newCommets, postIndex) {
  //   let newState = this.state.postData;
  //   newState[postIndex].comments = newCommets;
  //   this.setState({
  //     postData: newState
  //   });
  // }

  render() {
    return (
      <div className="App">
        <header className="main-header">
          <SearchBar />
        </header>
        {this.state.postData.map( (post,i) => {
          return <PostContainer key={post.id} post={post} postIndex={i} updateComments={this.updateComments}/>
        })}
      </div>
    );
  }
}

export default App;
