import delLocation from "../Metods/delLocation.js"

const delLocationService = async (req, res) =>
{

    try {

        const id = req.body.id

        const response = await delLocation(id)

        if(response)
            res.status(response.status).send(response)
        else
            throw `error, la ubicacion con id "${id}" es inexistente`
    } catch (err) 
    {
        res.status(400).send(err)
    }
}
export default delLocationService