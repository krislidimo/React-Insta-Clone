import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import PropTypes from 'prop-types';
import './PostContainer.css';


class PostContainer extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			likes: props.post.likes
		}
	}

	addLike = event => {
		this.setState({
			likes: this.state.likes+1,
		});
	}

	render() {
		return(
			<div className="post-container">
				<div className="thumbnail-section">
					<img className="thumbnail" src={this.props.post.thumbnailUrl} />
					<p>{this.props.post.username}</p>
				</div>
				<img className="main-img"src={this.props.post.imageUrl} />
				<div className="bottom-container">
					<div className="icons">
						<i className="far fa-heart fa-2x" onClick={this.addLike}></i>
						<i className="far fa-comment fa-2x"></i>
					</div>
					<p className="likes">{this.state.likes} likes</p>
					<CommentSection comments={this.props.post.comments} timeStamp={this.props.post.timestamp}/>
				</div>
			</div>
		);
	}
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