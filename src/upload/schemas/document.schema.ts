import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DocumentoDocument = HydratedDocument<Documento>;

@Schema()
export class Documento {
  @Prop()
  nombre: string;

  @Prop()
  apellido: string;

  @Prop()
  email: string;

  @Prop()
  genero: string;

  @Prop()
  edad: number;
}

export const DocumentoSchema = SchemaFactory.createForClass(Documento);
