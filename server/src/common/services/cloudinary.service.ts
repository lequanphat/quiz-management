import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  public CloudinaryService() {
    cloudinary.config({
      cloud_name: 'dnsnszbwk',
      api_key: '386581317386971',
      api_secret: 'mbCkxPc4pCC6q3hJ16MPozRrPFk', // Click 'View Credentials' below to copy your API secret
    });
  }
  async uploadImage() {
    const uploadResult = await cloudinary.uploader
      .upload(
        'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg',
        {
          public_id: 'shoes',
        },
      )
      .catch((error) => {
        console.log(error);
      });

    console.log(uploadResult);
  }
  async getImage() {
    const optimizeUrl = cloudinary.url('shoes', {
      fetch_format: 'auto',
      quality: 'auto',
    });

    console.log(optimizeUrl);
  }
}
