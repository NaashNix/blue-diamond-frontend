import React from 'react';
import Article from './Components/BasicArticle/Article';
import Header from './Components/Header/Header';
import MenuBar from './Components/MenuBar';
import {useHistory } from 'react-router-dom';

const GuestPage = (props) => {

	const history = useHistory();
	const routeChange = () =>{
		let path = 	'/login'
		history.push(path);
	}

   return (
		<div>

			<MenuBar onClick={routeChange} />
			<Header />
			<Article />
		</div>
	);
}

export default GuestPage;
