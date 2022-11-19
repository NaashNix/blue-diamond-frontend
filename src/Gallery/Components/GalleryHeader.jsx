import React from 'react'
import classes from "./GalleryHeader.module.css";


export default function GalleryHeader() {
  return (
		<div>
			<img
				src={require("/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/beach.jpg")}
				alt="Beach"
			/>
		</div>
  );
}
