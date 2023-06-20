import delLocation from "../Metods/delLocation.js"

const delLocationService = async (req, res) =>
{

    try {

        const id = req.params.id

        const response = await delLocation(id)

        if(response)
            res.status(200).send(response)
        else
            throw `error, la ubicacion con id "${id}" es inexistente`
    } catch (err) 
    {
        res.status(400).send(err)
    }
}
export default delLocationService