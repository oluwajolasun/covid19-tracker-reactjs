import React from 'react';
import { Grid, Card, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import CountUp from 'react-countup';

function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
	return confirmed ? (
		<Grid container direction='row' justify='center' alignItems='center'>
			<Card className='paper confirmed'>
				<Typography variant='h4'>Confirmed</Typography>
				<Typography variant='h5'>
					<CountUp
						start={0}
						end={confirmed.value}
						duration={2}
						separator=','
					/>
				</Typography>
				<Typography nowarp={false}>
					{new Date(lastUpdate).toGMTString()}
				</Typography>
				<Typography>Confirmed cases of COVID-19</Typography>
			</Card>
			<Card className='paper recovered'>
				<Typography variant='h4'>Recovered</Typography>
				<Typography variant='h5'>
					<CountUp
						start={0}
						end={recovered.value}
						duration={2}
						separator=','
					/>
				</Typography>
				<Typography>
					{new Date(lastUpdate).toGMTString()}
				</Typography>
				<Typography>Recovered cases of COVID-19</Typography>
			</Card>
			<Card className='paper deaths'>
				<Typography variant='h4'>Deaths</Typography>
				<Typography variant='h5'>
					<CountUp
						start={0}
						end={deaths.value}
						duration={2}
						separator=','
					/>
				</Typography>
				<Typography>
					{new Date(lastUpdate).toGMTString()}
				</Typography>
				<Typography>Death cases of COVID-19</Typography>
			</Card>
		</Grid>
	) : (
		<Grid container direction='row' justify='center' alignItems='center'>
			<div className='paper'>
				<Skeleton className='confirmed__skelton' variant='rect' />
			</div>
			<div className='paper'>
				<Skeleton className='recovered__skeleton' variant='rect' />
			</div>
			<div className='paper'>
				<Skeleton className='deaths__skeleton' variant='rect' />
			</div>
		</Grid>
	);
}

export default Cards;
