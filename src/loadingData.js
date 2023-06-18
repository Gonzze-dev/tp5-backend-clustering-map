
import { jsonGeographic } from "./data_trasport.js"
import {  modelGeolocation } from "./modelGeolocation.js"

const loadingData = async () => {
    const data = await modelGeolocation.count()
    
    if (!data){
        console.log('no hay data', data)
        await modelGeolocation.insertMany(jsonGeographic)
    }
    else
        console.log('hay data', data)
}
export default loadingData