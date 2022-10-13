import { Prop, SchemaFactory,Schema } from '@nestjs/mongoose'
import mongoose, { Document } from 'mongoose'
import { Company } from './company.schema';

export type EmployeeDocument = Employee & Document

@Schema()
export class Employee{

@Prop({required:true, unique:true, maxlength:20, minlength:8})
emp_name: string;

@Prop({default:4, max:22, min:4, required:true})
emp_grade: number;

@Prop({max:120000, min:40000, required:true})
emp_salary: number;

@Prop()
emp_contact: string;

@Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Company'})
company: Company

}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);