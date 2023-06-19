import {Router} from "express";

import home from "./Routes/home.js";
import getLocations from "./Routes/getLocations.js";
import addLocationService from "./Routes/Service/addLocationService.js";
import delLocationService from "./Routes/Service/delLocationService.js";

const router = Router()

router.get('/', async (req, res) => await home(req, res))
router.get('/getLocations', async (req, res) => await getLocations(req, res))

router.post('/addLocation', async (req, res) => await addLocationService(req, res))
router.post('/delLocation', async (req, res) => await delLocationService(req, res))



export default router