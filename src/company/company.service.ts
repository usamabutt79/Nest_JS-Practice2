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
}
