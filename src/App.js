import React, { useEffect, useState } from 'react';
import { fetchData } from './api';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import Countries from './Components/Countries';
import { Grid } from '@material-ui/core';
import './App.css';

const App = () => {
	const [fetchedData, setFetchedData] = useState({});
	const [country, setCountry] = useState('');

	useEffect(() => {
		const fetchAPI = async () => {
			setFetchedData(await fetchData());
		};
		fetchAPI();
	}, []);

	console.log(country);

	const handleOnCountryChange = async (country) => {
		setFetchedData(await fetchData(country));
		setCountry(country);
		console.log(fetchedData);
	};

	return (
		<div className='app'>
			<Header />
			<Grid
				container
				direction='column'
				justify='center'
				alignItems='center'
				className='info'>
				<Cards data={fetchedData} />
				<Countries handleOnCountryChange={handleOnCountryChange} />
			</Grid>
			<Footer />
		</div>
	);
};

export default App;
