import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import './PostContainer.css';

const Post = styled.div`
	width: 540px;
  border: 1px solid lightgrey;
  margin-bottom: 40px;
`;

const ThumbnailSection = styled.div`
	display: flex;
  align-items: center;
  margin: 6px 0px 6px 0px;
  font-size: 13.5px;
  font-weight: bold;

    .thumbnail {
	    width: 27px;
	    height: 27px;
	    margin: 0 6px 0 18px;
	    border-radius: 50%;
		}
`;

const MainImage = styled.img`
  width: 100%;    
`;

const BottomContainer = styled.div`
	padding: 0 14px;
  font-size: 14px;
`;

const LikesSection = styled.div`
  font-weight: bold;
  margin: 10px 0;
`;

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
			<Post>
				<ThumbnailSection>
					<img className="thumbnail" src={this.props.post.thumbnailUrl} />
					<p>{this.props.post.username}</p>
				</ThumbnailSection>
				<MainImage src={this.props.post.imageUrl} />
				<BottomContainer>
					<div className="icons">
						<i className="far fa-heart fa-2x" onClick={this.addLike}></i>
						<i className="far fa-comment fa-2x"></i>
					</div>
					<LikesSection>{this.state.likes} likes</LikesSection>
					<CommentSection comments={this.props.post.comments} timeStamp={this.props.post.timestamp}/>
				</BottomContainer>
			</Post>
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