import {modelGeolocation} from "../../modelGeolocation.js"

const delLocation = async (id) => 
{
    const location = await modelGeolocation.findByIdAndRemove(id)

    return location
}

export default delLocation