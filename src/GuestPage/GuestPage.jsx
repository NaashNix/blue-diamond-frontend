import React, { useState, useEffect } from "react";
import Article from "./Components/BasicArticle/Article";
import Header from "./Components/Header/Header";
import MenuBar from "./Components/MenuBar";
import { useHistory } from "react-router-dom";
import DashboardMenuBar from "../MainApplication/DashboardMenuBar";

const GuestPage = (props) => {
	const [userLoggedIn, setUserLoggedIn] = useState(false);

	const history = useHistory();
	const routeChange = () => {
		let path = "/login";
		history.push(path);
	};

	useEffect(() => {
		if (sessionStorage.getItem("availability_blue_diamond") == "1") {
			setUserLoggedIn(true);
		}
	}, [])

	return (
		<div>
			{!userLoggedIn && <MenuBar onClick={routeChange} />}
			{userLoggedIn && <DashboardMenuBar />}
			<Header />
			<Article />
		</div>
	);
};

export default GuestPage;
