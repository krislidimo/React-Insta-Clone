import React from 'react';
import './SearchBar.css';


function SearchBar(props) {
	return(
		<input className="search-bar" type="text" onChange={props.filterPosts} placeholder="Search"></input>
	);
}

export default SearchBar;