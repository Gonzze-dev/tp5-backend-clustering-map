import { modelGeolocation } from "../../modelGeolocation.js"

const modLocation = async (id, dataMod) => 
{
    const response = {
        message: ['Ubicacion modificada con exito'],
        data:{},
        status: 200
    }

    
    const filter = { _id: id }
    console.log("asdsad")
    response.data = await modelGeolocation.findByIdAndUpdate(filter, dataMod, {new: true})

    return response
}

export default modLocation