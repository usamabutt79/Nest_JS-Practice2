import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type CompanyDocument = Company & Document

@Schema()
export class Company{

@Prop({required:true})
emp_name: string;

@Prop()
emp_grade: number;

@Prop()
emp_salary: number;

@Prop()
emp_contact: string;

}

export const CompanySchema = SchemaFactory.createForClass(Company);