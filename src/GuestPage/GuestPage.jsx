import React from 'react';
import Article from './Components/BasicArticle/Article';
import Header from './Components/Header/Header';
import MenuBar from './Components/MenuBar';

const GuestPage = (props) => {

   return (
		<div>
			<MenuBar onClick={props.onClick} />
			<Header />
			<Article />
		</div>
	);
}

export default GuestPage;
