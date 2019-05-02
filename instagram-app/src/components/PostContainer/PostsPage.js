import React from 'react';
import dummyData from '../../dummy-data.js';
import SearchBar from '../../components/SearchBar/SearchBar.js';
import PostContainer from './PostContainer.js';
import styled from 'styled-components';

import './PostContainer.css';

const PostPage = styled.div`
	width: 540px;
  margin-bottom: 40px;
`;

const Header = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: .4rem 0.2rem;
`;

const H3 = styled.h3`
	display: inline-block;
	margin: 0;
	margin-left: 10px;
	padding-left: 10px;
	border-left: 1px solid lightgrey;
`;

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
    let posts = this.state.postData.filter(post => {if (post.username.includes(event.target.value)) {
      return post;
    }});
    this.setState({
      filteredPostData: posts
    });
  }

  render() {
		return (
			<PostPage>
				<Header>
					<div>
						<i class="fab fa-instagram fa-lg"></i>
						<H3>Instagram</H3>
					</div>

	        <SearchBar filterPosts={this.filterPosts}/>

	        <div>
	        	<i class="far fa-compass fa-lg"></i>
	        	<i class="far fa-heart fa-lg"></i>
	        	<i class="fas fa-user-astronaut fa-lg"></i>
	        </div>
	      </Header>

	      {
	      	this.state.filteredPostData.length > 0 
	      	? this.state.filteredPostData.map( (post) => {
	          return <PostContainer key={post.id} post={post} />
	        }) 
	        : this.state.postData.map( (post) => {
	          return <PostContainer key={post.id} post={post} /> 
	        })
	      }
	    </PostPage>
		);
	}
}

export default PostsPage;