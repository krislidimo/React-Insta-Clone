import React from 'react';
import styled from 'styled-components';

import './CommentSection.css';

const DivComment = styled.div`
    padding : 2px 0;
`;

const User = styled.span`
    font-weight: bold;
`;

function Comment(props) {
	return(
		<DivComment className="comment"><User className="user">{props.comment.username}</User> {props.comment.text}</DivComment>
	);
}

export default Comment;