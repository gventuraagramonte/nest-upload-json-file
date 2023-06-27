import { Module } from '@nestjs/common';
import { UploadModule } from './upload/upload.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-csv-upload'),
    UploadModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
