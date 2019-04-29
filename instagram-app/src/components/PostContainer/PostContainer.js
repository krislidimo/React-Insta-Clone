import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import './PostContainer.css';


function PostContainer(props) {
	return(
		<div className="post-container">
			<CommentSection comments={props.post.comments} />
		</div>
	);
}

export default PostContainer;