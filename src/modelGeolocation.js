import {Schema, model} from 'mongoose'

export const geolocation = new Schema({
    name: String,
    city: String,
    iata_faa: String,
    icao: String,
    lat: Number,
    lng: Number,
    alt: Number,
    tz: String
  });
  
 export const modelGeolocation = model('Geolocation', geolocation);