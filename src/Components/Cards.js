import React from 'react';
import { Grid, Card, CardContent, Typography, Paper } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import CountUp from 'react-countup';

function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
	return confirmed ? (
		<div className='cards'>
			<Grid
				container
				direction='row'
				justify='center'
				alignItems='center'>
				<Paper className='paper'>
					<Card>
						<CardContent className='confirmed'>
							<Typography variant='h4'>
								Confirmed
							</Typography>
							<Typography variant='h5'>
								<CountUp
									start={0}
									end={confirmed.value}
									duration={2}
									separator=','
								/>
							</Typography>
							<Typography>
								{new Date(lastUpdate).toGMTString()}
							</Typography>
							<Typography>
								Confirmed cases of COVID-19
							</Typography>
						</CardContent>
					</Card>
				</Paper>
				<Paper className='paper'>
					<Card>
						<CardContent className='recovered'>
							<Typography variant='h4'>
								Recovered
							</Typography>
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
							<Typography>
								Recovered cases of COVID-19
							</Typography>
						</CardContent>
					</Card>
				</Paper>
				<Paper className='paper'>
					<Card>
						<CardContent className='deaths'>
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
							<Typography>
								Deaths cases of COVID-19
							</Typography>
						</CardContent>
					</Card>
				</Paper>
			</Grid>
		</div>
	) : (
		<div>
			<Grid
				container
				direction='row'
				justify='center'
				alignItems='center'>
				<Grid className='paper'>
					<Skeleton
						variant='rect'
						width={274.45}
						height={161.6}
					/>
				</Grid>
				<Grid className='paper'>
					<Skeleton
						variant='rect'
						width={274.45}
						height={161.6}
					/>
				</Grid>
				<Grid className='paper'>
					<Skeleton
						variant='rect'
						width={274.45}
						height={161.6}
					/>
				</Grid>
			</Grid>
		</div>
	);
}

export default Cards;
