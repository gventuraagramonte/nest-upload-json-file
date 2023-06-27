import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DocumentoSchema } from './schemas/document.schema';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Documento', schema: DocumentoSchema }]),
    MulterModule.register(),
  ],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
