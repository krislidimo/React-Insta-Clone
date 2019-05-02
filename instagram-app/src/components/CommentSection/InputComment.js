import React from 'react';
import styled from 'styled-components';

import './CommentSection.css';

const Input = styled.input`
	width: 100%;
    color: grey;
    padding: 17px 0;
    border: none;
    border-top: 1px solid lightgrey;
    outline: none;
`;

function InputComment(props) {
	return(
		<form onSubmit={props.addNewComment}>
			<Input type="text" value={props.currentComment} onChange={props.updateComment} placeholder="Add a comment..."/>
		</form>
	);
}

export default InputComment;