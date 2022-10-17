import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './Schema/employee.schema';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { CompanyModule } from './company.module';
import { Company, CompanySchema } from './Schema/company.schema';


@Module({

  imports: [MongooseModule.forFeature([{name: Employee.name, schema: EmployeeSchema},{name: Company.name, schema: CompanySchema}])],
  controllers: [EmployeeController, CompanyController],
  providers: [EmployeeService, CompanyService]

})
export class EmployeeModule {}
