import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Documento } from './schemas/document.schema';

@Injectable()
export class UploadService {
  constructor(
    @InjectModel('Documento')
    private readonly documentModel: Model<Documento>,
  ) {}

  async processCSV(file: Express.Multer.File): Promise<void> {
    const data = JSON.parse(file.buffer.toString());
    const documents = data.map((item) => ({
      id: Math.random().toString(36).substring(7),
      nombre: item.nombre,
      apellido: item.apellido,
      email: item.email,
      genero: item.genero,
      edad: item.edad,
    }));

    await this.documentModel.create(documents);
  }
}
