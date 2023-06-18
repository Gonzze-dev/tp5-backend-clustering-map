import {  modelGeolocation } from "../modelGeolocation.js"

const getLocations = async (req, res) => 
{
    let status = 200
    const response = {
        message: 'Ubicaciones obtenidas con exito',
        data: []
    }

    const locations = await modelGeolocation.find()

    response.data = locations

    res.status(status).send(response)
}

export default getLocations