import React, { useDebugValue, useEffect, useState } from "react";
import ImageContainer from "./ImageContainer";
import classes from "./TouristPlaces.module.css";
import TouristPlacesDescription from "./TouristPlacesDescription";
import image1 from "/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/SriLanka1.jpg";
import image2 from "/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/SriLanka2.jpg";
import image3 from "/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/SriLanka3.jpg";

const data = [
	{
		title: "Pinnawala Elephants",
		image: image1,
		link: "https://www.google.com",
		description:
			"Pinnawala Elephant Orphanage, is an orphanage, nursery and captive breeding ground for wild Asian elephants located at Pinnawala village, 13 km northeast of Kegalle town in Sabaragamuwa Province of Sri Lanka.",
	},
	{
		title: "Sigiriya Kingdom",
		image: image2,
		link: "https://www.google.com",
		description:
			"Sigiriya, also called Lion Rock or Lion Mountain, site in central Sri Lanka consisting of the ruins of an ancient stronghold that was built in the late 5th century CE on a remarkable monolithic rock pillar. The rock, which is so steep that its top overhangs the sides.",
	},
	{
		title: "Upcountry Hills",
		image: image3,
		link: "https://www.google.com",
		description:
			"Sri Lanka is home to some of the lushest tea estates you can visit. Take your experience to the next level with an overnight stay at one of them! Here are six beautiful hotels, lodges, and bungalows hidden amidst tea fields to choose from.",
	},
];

const TouristPlaces = () => {
	const [title, setTitle] = useState("");
	const [image, setImage] = useState(image1);
	const [description, setDescription] = useState("");
	const [link, setLink] = useState("");
	const [isHover, setIsHover] = useState(false);

	useEffect(() => {
		let index = 0;

		const interval = setInterval(() => {
			if (isHover === false) {
				if (index === data.length) {
					index = 0;
				}
				updatingProcess(index);
				index = index + 1;
			}
		}, 2500);

		return () => {
			console.log("interval cleared");
			clearInterval(interval);
		};
	}, [isHover]);

	useEffect(() => {
		console.log(isHover);
	}, [isHover]);

	function updatingProcess(point) {
		console.log(point);
		setTitle(data[point].title);
		setImage(data[point].image);
		setDescription(data[point].description);
		setLink(data[point].link);
	}

	return (
		<div
			className={classes.parent}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<TouristPlacesDescription description={description} link={link} />
			<ImageContainer title={title} source={image} />
		</div>
	);
};

export default TouristPlaces;
