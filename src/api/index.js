import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (val) => {
	let countryUrl = url;

	if (val) {
		countryUrl = `${url}/countries/${val}`;
	}

	try {
		const {
			data: { confirmed, recovered, deaths, lastUpdate },
		} = await axios.get(countryUrl);
		// console.log({ confirmed, recovered, deaths, lastUpdate });
		return { confirmed, recovered, deaths, lastUpdate };
	} catch (error) {
		console.log(error);
	}
};

export const fetchCountries = async () => {
	try {
		const {
			data: { countries },
		} = await axios.get(`${url}/countries`);
		// console.log({ countries });
		return countries.map((country) => country.name);
	} catch (error) {
		console.log(error);
	}
};
