import React from 'react';
import PostContainer from './PostContainer.js';
import './PostContainer.css';

const PostsPage = props => {
	return (
		<div className="PostsPage">
      {props.filteredPostData.length > 0 ?
        props.filteredPostData.map( (post) => {
          return <PostContainer key={post.id} post={post} />
        }) :
        props.postData.map( (post) => {
          return <PostContainer key={post.id} post={post} /> 
        })
      }
    </div>
	);
}

export default PostsPage;