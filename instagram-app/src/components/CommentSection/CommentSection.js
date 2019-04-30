import React from 'react';
import Comment from './Comment.js';
import PropTypes from 'prop-types';
import InputComment from './InputComment.js';
import './CommentSection.css';


class CommentSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: props.comments,
			comment: ''
		};
	};

	addNewComment = (event, i=this.props.postIndex) => {
		event.preventDefault();
		this.setState({
			comments: [...this.state.comments, {
				username: "",
				text: this.state.comment
			}],
			comment: ''
		});

		this.props.updateComments(this.state.comments, i);
	};

	updateComment = event => {
		this.setState({
			comment: event.target.value
		});
	}

	render() {
		return(
			<div className="comment-section">
				{this.props.comments.map(comment => {
					return <Comment key={comment.id} comment={comment} />
				})}
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