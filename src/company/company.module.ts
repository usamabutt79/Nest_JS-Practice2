import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { Company, CompanySchema } from './Schema/company.schema';
import { Employee, EmployeeSchema } from './Schema/employee.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Employee.name, schema: EmployeeSchema},{name: Company.name, schema: CompanySchema}])],
  controllers: [CompanyController],
  providers: [CompanyService]
})
export class CompanyModule {}
