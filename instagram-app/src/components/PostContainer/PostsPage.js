import React from 'react';
import dummyData from '../../dummy-data.js';
import SearchBar from '../../components/SearchBar/SearchBar.js';
import PostContainer from './PostContainer.js';
import './PostContainer.css';

class PostsPage extends React.Component {
	constructor() {
		super();
		this.state = {
      postData: [],
      filteredPostData: []
    }
	}

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
			<div className="PostsPage">
				<header className="main-header">
	        <SearchBar filterPosts={this.filterPosts}/>
	      </header>
	      {this.state.filteredPostData.length > 0 ?
	        this.state.filteredPostData.map( (post) => {
	          return <PostContainer key={post.id} post={post} />
	        }) :
	        this.state.postData.map( (post) => {
	          return <PostContainer key={post.id} post={post} /> 
	        })
	      }
	    </div>
		);
	}
}

export default PostsPage;