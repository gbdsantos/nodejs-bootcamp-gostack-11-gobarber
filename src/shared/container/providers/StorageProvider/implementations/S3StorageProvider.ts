import aws, { S3 } from 'aws-sdk';
import fs from 'fs';
import path from 'path';
import uploadConfig from '@config/upload';
import IStorageProvider from '../models/IStorageProvider';
import upload from '@config/upload';

class DiskStorageProvider implements IStorageProvider {
  private client: S3;

  constructor() {
    this.client = new aws.S3({
      region: 'us-east-1',
    })
  }

  public async saveFile(file: string): Promise<string> {
    const original_path = path.resolve(uploadConfig.tmpFolder, file);

    const fileContent = await fs.promises.readFile(original_path, {
      encoding: 'utf-8',
    });

    this.client.putObject({
      Bucket: 'app-gobarber-2',
      Key: file,
      ACL: 'public-read',
      Body: fileContent,
    }).promise();

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    await this.client.deleteObject({
      Bucket: 'app-gobarber-2',
      Key: file,
    }).promise();
  }
}

export default DiskStorageProvider;
