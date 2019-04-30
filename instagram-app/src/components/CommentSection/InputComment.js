import React from 'react';
import './CommentSection.css';


function InputComment(props) {
	return(
		<form onSubmit={props.addNewComment}>
			<input className="add-comment" type="text" value={props.currentComment} onChange={props.updateComment} placeholder="Add a comment..."></input>
		</form>
	);
}

export default InputComment;