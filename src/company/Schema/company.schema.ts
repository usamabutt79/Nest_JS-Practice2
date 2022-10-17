import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'

export type CompanyDocument = Company & Document
@Schema()
export class Company extends Document{
    
    @Prop({required:true, unique:true, maxlength:20, minlength:8})
    comp_name: string;
}



export const CompanySchema = SchemaFactory.createForClass(Company);