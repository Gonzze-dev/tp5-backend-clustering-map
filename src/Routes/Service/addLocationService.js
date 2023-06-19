import addLocation from "../Metods/addLocation.js"

const addLocationService = async (req, res) =>
{

    try {
        const response = await addLocation(req, res)

        res.status(response.status).send(response.message)
    } catch (err) 
    {
        res.status(400).send(err)
    }
}
export default addLocationService