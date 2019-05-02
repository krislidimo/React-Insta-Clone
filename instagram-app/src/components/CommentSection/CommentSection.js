import React from 'react';
import Comment from './Comment.js';
import PropTypes from 'prop-types';
import InputComment from './InputComment.js';
import styled from 'styled-components';

import './CommentSection.css';

const TimeStamp = styled.div`
	color: grey;
    font-size: 10px;
    padding: 8px 0;
`;

class CommentSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: props.comments,
			comment: ''
		};
	};

	addNewComment = event => {
		event.preventDefault();
		this.setState({
			comments: [...this.state.comments, {
				username: "test",
				text: this.state.comment
			}],
			comment: ''
		});
	};

	updateComment = event => {
		this.setState({
			comment: event.target.value
		});
	}

	render() {
		return(
			<div>
				{this.state.comments.map(comment => {
					return <Comment key={comment.id} comment={comment} />
				})}
				<TimeStamp>{this.props.timeStamp}</TimeStamp>
				<InputComment currentComment={this.state.commet} updateComment={this.updateComment} addNewComment={this.addNewComment}/>
			</div>
		);
	}
}

CommentSection.propTypes = {
	comments: 
		PropTypes.arrayOf(
			PropTypes.shape({
				username: PropTypes.string.isRequired,
				text: PropTypes.string.isRequired,
			})
		)
};

export default CommentSection;