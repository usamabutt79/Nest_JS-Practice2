import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Company, CompanyDocument } from './Schema/company.schema';
import { Employee, EmployeeDocument } from './Schema/employee.schema';

@Injectable()
export class EmployeeService {

    constructor(@InjectModel(Employee.name) private EmployeeModel: Model<EmployeeDocument>,@InjectModel(Company.name) private CompanyModel: Model<CompanyDocument>) {}

    async addEmploye(empdata: CreateEmployeeDto){
        const employee = await this.EmployeeModel.create(empdata);
        return employee
    }

    async getAllEmployee(){
        return this.EmployeeModel.find()
    }

    async findOne(id: string){
        return await this.EmployeeModel.findById(id).populate('Company','', this.CompanyModel);
    }

    async findWithQuery(){
        return await this.EmployeeModel.find({emp_name: "Usama Aslam Butt",emp_grade: { $gt: 20 }});
    }

    async updateWithQuery(id:string){
        return await this.EmployeeModel.findByIdAndUpdate(id, {emp_name: "Muhammad Bilal"})
    }

    async updateEmployee({emp_name,emp_grade,emp_contact,emp_salary}: CreateEmployeeDto){
        const update=await this.EmployeeModel.findOneAndUpdate({emp_name},{emp_name,emp_grade,emp_contact,emp_salary})
        return await this.findOne(update?._id)
    }

    async deleteEmployee(id: string){
        const deleteEmp = await this.EmployeeModel.findByIdAndDelete(id);
        return deleteEmp;
    }

    async deleteAllEmployee(){
        return await this.EmployeeModel.deleteMany();
    }
}
