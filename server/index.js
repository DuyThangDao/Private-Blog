import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import posts from './routers/posts.js'
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.DATABASE_URL;

app.use(bodyParser.json({limit : '30mb'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

app.use('/posts',posts);

mongoose.connect(URI)
.then(()=>{
    console.log('Connected to DB')
})
.catch((err)=>{
    console.log('err',err);
})

app.listen(PORT, ()=>{
    console.log('Server is running on port '+PORT);
});