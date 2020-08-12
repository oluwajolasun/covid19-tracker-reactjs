import React, { useEffect, useState } from 'react';
import { FormControl, NativeSelect, FormHelperText } from '@material-ui/core';
import { fetchCountries } from '../api';

const Countries = ({ handleOnCountryChange }) => {
	const [fetchedCountries, setFetchedCountries] = useState([]);

	useEffect(() => {
		const fetchAPI = async () => {
			setFetchedCountries(await fetchCountries());
		};
		fetchAPI();
	}, [setFetchedCountries]);

	return (
		<div className='form'>
			<FormControl>
				<NativeSelect
					className='select'
					onChange={(e) =>
						handleOnCountryChange(e.target.value)
					}>
					<option value=''>Global</option>
					{fetchedCountries.map((country, i) => (
						<option key={i} value={country}>
							{country}
						</option>
					))}
				</NativeSelect>
				<FormHelperText>Select Country</FormHelperText>
			</FormControl>
		</div>
	);
};

export default Countries;
