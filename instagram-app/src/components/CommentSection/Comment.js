import React from 'react';
import './CommentSection.css';


function Comment(props) {
	return(
		<div className="comment"><span className="user">{props.comment.username}</span> {props.comment.text}</div>
	);
}

export default Comment;