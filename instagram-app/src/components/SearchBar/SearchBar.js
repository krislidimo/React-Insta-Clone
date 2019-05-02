import React from 'react';
import styled from 'styled-components';

import './SearchBar.css';

const Input = styled.input`
	color: grey;
	text-align: center;
	border-radius: 4px;
	border: 1px solid grey;
	background-color: #F5F7FA;
	margin: 14px auto;

`;

function SearchBar(props) {
	return(
		<Input className="search-bar" type="text" onChange={props.filterPosts} placeholder="Search" />
	);
}

export default SearchBar;