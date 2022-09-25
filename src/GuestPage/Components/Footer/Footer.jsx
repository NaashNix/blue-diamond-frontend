import React from 'react';
import MainLogo from '../MainLogo';
import FooterDeveloperLine from './FooterDeveloperLine';
import FooterImage from './FooterImage';
import classes from './Footer.module.css';

const Footer = () => {
   return (
		<div className={classes.parent}>
			<div className={classes.floatingContent}>
				<div className={classes.childArticle}>
					<MainLogo className={classes.logo} />
					<span className={} >Blue Diamond Hotel</span>
					<span>Blue Diamond Hotel</span>
				</div>

            <div className={classes.childArticle} >
               <span>Hello There!</span>
            </div>

			</div>
			<FooterImage />
			<FooterDeveloperLine />
		</div>
	);
}

export default Footer;
