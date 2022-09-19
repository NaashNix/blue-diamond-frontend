import React from 'react';
import classes from './Article.module.css';
import TitlebarImageList from './ImageTiles';


const Article = () => {
   return (
		<div className={classes.parent}>
			<span className={classes.heading} >Charming European-Style Art Deco</span>
			<span className={classes.subHeading} >
				Open the door to a warm and welcoming variety of rooms: single
				queens, double or a suite. We will be delighted to accommodate you.
			</span>
         
		</div>
	);
}

export default Article;
