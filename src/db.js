import mongoose from 'mongoose'
import { DB_URL, DB_URL_PC } from './configServer.js'



const connectMongo = async () => {

    try {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        
        mongoose.connect(DB_URL, options)
        
        console.log('Conectted to mongo')
    } catch (err) {
        console.log(err)
    }
}
export default connectMongo