/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GeneralDocument = HydratedDocument<General>;

@Schema()
export class General {

  @Prop()
  address?: string;

  @Prop()
  consecutive: number;

  @Prop()
  id: string;

  @Prop()
  name?: string;

  @Prop()
  p_iva: number;

  @Prop()
  phone?: string;

  @Prop()
  quote_condition: string;

  @Prop()
  site?: string;

}

export const GeneralSchema = SchemaFactory.createForClass(General);
