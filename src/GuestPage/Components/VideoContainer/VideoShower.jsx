import React from 'react';
import classes from './VideoShower.module.css';
import VideoTitle from './VideoTitle';
import videoOne from "/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/vids/Hand.mp4";

const VideoShower = () => {
   return (
		<div className={classes.parent}>
			<VideoTitle />
			<video autoPlay loop muted width="100%">
				<source
					src={videoOne}
					type="video/webm"
				/>
				Sorry, your browser doesn't support videos.
			</video>
		</div>
	);
}

export default VideoShower;
