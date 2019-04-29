import React from 'react';
import Comment from './Comment.js';
import './CommentSection.css';


function CommentSection(props) {
	return(
		<div className="comment-section">
			{props.comments.map(comment => {
				return <Comment key={comment.id} comment={comment} />
			})}
		</div>
	);
}

export default CommentSection;