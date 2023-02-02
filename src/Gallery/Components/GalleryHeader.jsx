import React from 'react'
import classes from "./GalleryHeader.module.css";


export default function GalleryHeader() {
  return (
		<div className={classes.headerImageContainer}>
			<img
				className={classes.headerImage}
				src={require("/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/beach.jpg")}
				alt="Beach"
			/>
			<div className={classes.headerDescParent}>
				<p>
					Coupled with the legendary hospitality of our family, Balapitiya
					serves as the perfect backdrop for a refreshing two-acre sprawl
					of lush coastal private villas at Calamansi Cove Villas by
					Jetwing. Whether you decide to explore the verdant grounds abound
					with the fruit that lends us our name, or step into our spacious
					tropical villas, our distinct island luxury awaits your arrival.
				</p>
				<span>Jeffrey Bravo Peter</span>
			</div>
		</div>
  );
}
