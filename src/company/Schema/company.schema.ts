import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type CompanyDocument = Company & Document

@Schema()
export class Company{

@Prop({required:true, unique:true, maxlength:20, minlength:8})
emp_name: string;

@Prop({default:4, max:22, min:4, required:true})
emp_grade: number;

@Prop({max:120000, min:40000, required:true})
emp_salary: number;

@Prop()
emp_contact: string;

}

export const CompanySchema = SchemaFactory.createForClass(Company);