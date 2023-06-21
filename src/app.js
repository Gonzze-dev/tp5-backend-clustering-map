import express from 'express'

import router from './appRouter.js'

import connectMongo from "./db.js"
import { PORT } from './configServer.js';
import cors from 'cors'
import loadingData from './loadingData.js';

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
      });

app.use(router)

export default async function main()
{
    try {
        app.listen(PORT)
        console.log(`server listen in http://localhost:${PORT}`)
        await connectMongo()
        await loadingData()
    } catch (err) {
        console.log(err)   
    }  
}