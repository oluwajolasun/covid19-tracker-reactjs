import React from 'react';
import { Typography } from '@material-ui/core';

const Footer = () => {
	return (
		<div className='footer'>
			<Typography variant='inherit'>
				Designed and Developed by Oluwajolasun<span />🥀
				{new Date().getFullYear()}
			</Typography>
		</div>
	);
};

export default Footer;
