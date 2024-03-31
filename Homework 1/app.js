import 'dotenv/config';
import express from 'express';
import {globalRouter} from './consts/router.const.js';
import { connect } from 'mongoose';
import { MONGO_URI } from './consts/db.const.js';

const app = express();
app.use(express.json());

app.use('/api', globalRouter);

connect(MONGO_URI)
	.then(() => {
		app.listen(process.env.PORT, process.env.HOST, async () => {
			console.log(
				`The server is up at port: ${process.env.PORT} and on host: ${process.env.HOST}`
			);
		});
	})
	.catch(error => {
		console.log('Issue while connecting to Mongo DB.', { error });
	});