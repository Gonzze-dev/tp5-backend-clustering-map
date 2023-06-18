import addLocation from "../Metods/addLocation"

const addLocationService = async (req, res) =>
{

    try {
        const response = await addLocation(req, res)

        res.status(respose.status).send(response.message)
    } catch (err) 
    {
        res.status(400).send(err)
    }
}
export default addLocationService