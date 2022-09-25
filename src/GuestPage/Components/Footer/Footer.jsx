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
					<span className={classes.addressLine}>Blue Diamond Hotel</span>
					<span className={classes.addressLine}>No 15,</span>
					<span className={classes.addressLine}>De Mel Road,</span>
					<span className={classes.addressLine}>Colombo</span>
					<span className={classes.addressLine}>Western Province</span>
					<span className={classes.addressLine}>Sri Lanka.</span>
				</div>

				<div className={classes.childArticle}>
					<span>This is sample footer</span>
				</div>

				<div className={classes.childArticle}>
					<span>This is sample footer</span>
				</div>

			</div>
			<FooterImage />
			<FooterDeveloperLine />
		</div>
	);
}

export default Footer;
