import express from 'express'

import router from './appRouter.js'

import connectMongo from "./db.js"
import { PORT } from './configServer.js';

import { jsonGeographic } from './data_trasport.js';
import loadingData from './loadingData.js';

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))

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