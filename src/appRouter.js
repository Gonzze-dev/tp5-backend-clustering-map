import {Router} from "express";

import home from "./Routes/home.js";
import getLocations from "./Routes/getLocations.js";

const router = Router()

router.get('/', async (req, res) => await home(req, res))
router.get('/getLocations', async (req, res) => await getLocations(req, res))


export default router