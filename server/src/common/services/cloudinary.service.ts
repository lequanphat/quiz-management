import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor() {
    cloudinary.config({
      cloud_name: 'dnsnszbwk',
      api_key: '386581317386971',
      api_secret: 'mbCkxPc4pCC6q3hJ16MPozRrPFk',
    });
  }
  async upload(filePath: string) {
    try {
      const uploadResult = await cloudinary.uploader.upload(filePath);
      return uploadResult;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
