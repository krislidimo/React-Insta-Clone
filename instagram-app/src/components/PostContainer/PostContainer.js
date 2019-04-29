import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import PropTypes from 'prop-types';
import './PostContainer.css';


function PostContainer(props) {
	return(
		<div className="post-container">
			<div className="thumbnail-section">
				<img className="thumbnail" src={props.post.thumbnailUrl} />
				<p>{props.post.username}</p>
			</div>
			<img className="main-img"src={props.post.imageUrl} />
			<p>{props.post.likes} likes</p>
			<CommentSection comments={props.post.comments} />
		</div>
	);
};

PostContainer.propTypes = {
	post: PropTypes.shape({
			username: PropTypes.string.isRequired,
			imageUrl: PropTypes.string.isRequired,
			likes: PropTypes.number,
			timestamp: PropTypes.string.isRequired,
	})
};

export default PostContainer;