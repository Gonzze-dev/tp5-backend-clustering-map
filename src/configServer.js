const SERVICE = "mongo"
const CONTAINER_NAME = "mongodbtp5"

const PORT_MONGO = 27017
const DB_NAME = 'tp5'
export const PORT = 3000
export const DB_URL = `mongodb://${SERVICE}/${CONTAINER_NAME}`
export const DB_URL_PC = `mongodb://127.0.0.1:${PORT_MONGO}/${DB_NAME}`