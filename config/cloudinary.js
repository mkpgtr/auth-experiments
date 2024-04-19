import { v2 as cloudinary } from 'cloudinary';
import { BadRequestError } from '../errors/customErrors';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            throw new BadRequestError('Please provide a file path');
        }
        const result = await cloudinary.uploader.upload(file.path, {
            resource_type: "auto",
        });

        // after file has been successfully uploaded to cloudinary, we return the secure url
        console.log('file uploaded to cloudinary');
        return result;
    } catch (error) {

        fs.unlinkSync(localFilePath);
        console.log(error);
        return null; //remove the locally saved temporary file as the upload operation got failed
    }
}

export {
    uploadOnCloudinary
}