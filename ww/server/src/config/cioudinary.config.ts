import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.cloudinary_name ,
    api_key: process.env.cloudinary_api_key,
    api_secrcet: process.env.cloudinary_api_secert,
    
})