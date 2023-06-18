import { model } from "mongoose"
import {  modelGeolocation, modelGeolocation, modelGeolocation } from "../../modelGeolocation.js"

const dataIsEmpty = (data) => {
    const response = {
        emptyAtributes: false,
        arrErrors: []
    }
    const arrErrors = []

    if (!data.name)
        arrErrors.push('Error, el campo "name" esta vacio')
    if (!data.city)
        arrErrors.push('Error, el campo "city" esta vacio')
    if (!data.iata_faa)
        arrErrors.push('Error, el campo "iata_faa" esta vacio')
    if (!data.icao)
        arrErrors.push('Error, el campo "icao" esta vacio')
    if (!data.lat)
        arrErrors.push('Error, el campo "lat" esta vacio')
    if (!data.lng)
        arrErrors.push('Error, el campo "lng" esta vacio')
    if (!data.alt)
        arrErrors.push('Error, el campo "alt" esta vacio')
    if (!data.tz)
        arrErrors.push('Error, el campo "tz" esta vacio')

    response.arrErrors = arrErrors
    response.emptyAtributes = (arrErrors.length == 0)

    return response
}

const addLocation = async (req, res) => 
{
    const response = {
        message: ['Ubicacion agregada con exito'],
        status: 200
    }
    const data = req.body
    const dataReview = dataIsEmpty(data)

    if (!dataReview.emptyAtributes)
    {
        response.message = dataReview.arrErrors
        response.status = 400
        return response
    }
    const modelGeolocation = new modelGeolocation(data)

    await modelGeolocation.save()

    return response
}

export default addLocation