import './dotenv';
import express from 'express';
const app = express();
import bodyparser from 'body-parser';
import authRouter from './auth'


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use('/auth', authRouter);

const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));