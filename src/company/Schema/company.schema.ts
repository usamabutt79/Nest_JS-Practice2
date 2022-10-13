import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose'

export type EmployeeDocument = Company & Document
@Schema()
export class Company{
    
    @Prop({required:true, unique:true, maxlength:20, minlength:8})
    comp_name: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);