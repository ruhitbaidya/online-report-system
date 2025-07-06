import { v2 as cloudinary } from 'cloudinary';
import { configs } from '../config/configs';

export const uploadImage = async(name: string, imageUrl:string)=>{
    cloudinary.config({ 
        cloud_name: configs.coud_name, 
        api_key: configs.coud_Key, 
        api_secret: configs.coud_secrate 
    });
    
     const uploadResult = await cloudinary.uploader
       .upload(
           imageUrl, {
               public_id: name,
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    return uploadResult;
}