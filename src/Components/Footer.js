import React from 'react';

const Footer = () => {
	return (
		<div className='footer'>
			<p>
				<a href={'https://oluwajolasun.com/'} target='blank'>
					Designed and Developed by Oluwajolasun
					<span />
					🥀
					{new Date().getFullYear()}
				</a>
			</p>
		</div>
	);
};

export default Footer;
