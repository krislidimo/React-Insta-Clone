import React from 'react';
import './CommentSection.css';


function Comment(props) {
	return(
		<div className="comment">{props.comment.text}</div>
	);
}

export default Comment;