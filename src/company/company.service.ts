import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee, EmployeeDocument } from './Schema/employee.schema';

@Injectable()
export class CompanyService {

    constructor(@InjectModel(Employee.name) private CompanyModel: Model<EmployeeDocument>) {}

    async addEmploye(empdata: CreateEmployeeDto){
        const employee = await this.CompanyModel.create(empdata);
        return employee
    }

    async getAllEmployee(){
        return this.CompanyModel.find()
    }

    async findOne(id: string){
        return await this.CompanyModel.findById(id);
    }

    async findWithQuery(){
        return await this.CompanyModel.find({emp_name: "Usama Aslam Butt",emp_grade: { $gt: 20 }});
    }

    async updateWithQuery(id:string){
        return await this.CompanyModel.findByIdAndUpdate(id, {emp_name: "Muhammad Bilal"})
    }

    async updateEmployee({emp_name,emp_grade,emp_contact,emp_salary}: CreateEmployeeDto){
        const update=await this.CompanyModel.findOneAndUpdate({emp_name},{emp_name,emp_grade,emp_contact,emp_salary})
        return await this.findOne(update?._id)
    }

    async deleteEmployee(id: string){
        const deleteEmp = await this.CompanyModel.findByIdAndDelete(id);
        return deleteEmp;
    }

    async deleteAllEmployee(){
        return await this.CompanyModel.deleteMany();
    }
}
