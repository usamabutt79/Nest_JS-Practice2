import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company, CompanyDocument } from './Schema/company.schema';

@Injectable()
export class CompanyService {

    constructor(@InjectModel(Company.name) private CompanyModel: Model<CompanyDocument>) {}

    async addEmploye(empdata: CreateCompanyDto){
        const employee = await this.CompanyModel.create(empdata);
        return employee
    }

    async getAllEmployee(){
        return this.CompanyModel.find()
    }

    async findOne(id: string){
        return await this.CompanyModel.findById(id);
    }

    async updateEmployee({emp_name,emp_grade,emp_contact,emp_salary}: CreateCompanyDto){
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
