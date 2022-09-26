import React, { useState, useEffect } from "react";
import Article from "./Components/BasicArticle/Article";
import Header from "./Components/Header/Header";
import MenuBar from "./Components/MenuBar";
import { useHistory } from "react-router-dom";
import DashboardMenuBar from "../MainApplication/DashboardMenuBar";
import MiniImageGallery from "./Components/BasicArticle/MiniImageGallery";
import Footer from "./Components/Footer/Footer";
import Destinations from "./Components/MidArticle/Destinations";
import TouristPlaces from "./Components/Activities/TouristPlaces";
import VideoShower from "./Components/VideoContainer/VideoShower";

const GuestPage = (props) => {
	const [userLoggedIn, setUserLoggedIn] = useState(false);

	useEffect(() => {
		if (sessionStorage.getItem("availability_blue_diamond") === "1") {
			setUserLoggedIn(true);
		}
	}, [])

	let topArticleHeading = 'Charming European-Style Art Deco';
	let topArticleSubHeading = 'Open the door to a warm and welcoming variety of rooms: single queens, double or a suite. We will be delighted to accommodate you.'
	let secondArticleHeading = "Explore Island Stories";
	let secondArticleSubHeading =
		"Each place, and each smile in Sri Lanka has a story to tell. We have so much to share with you, so come along to our island in paradise!";

	return (
		<div>
			{!userLoggedIn && <MenuBar />}
			{userLoggedIn && <DashboardMenuBar />}
			<Header />
			<Article heading={topArticleHeading} description={topArticleSubHeading} />
			<MiniImageGallery />
			<TouristPlaces />
			<Article heading={secondArticleHeading} description={secondArticleSubHeading} />
			<Destinations />
			<VideoShower />
			<Footer />
		</div>
	);
};

export default GuestPage;
