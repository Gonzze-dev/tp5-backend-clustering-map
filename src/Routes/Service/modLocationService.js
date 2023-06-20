import modLocation from "../Metods/modLocation.js"

const modLocationService = async (req, res) =>
{

    try {
        const id = req.params.id
        const data = req.body

        const response = await modLocation(id, data)

        if(response)
            res.status(200).send(response)
        else
            throw `error, la ubicacion con id "${id}" es inexistente`
    } catch (err) 
    {
        res.status(400).send(err)
    }
}
export default modLocationService