import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './Schema/employee.schema';


@Module({

  imports: [MongooseModule.forFeature([{name: Employee.name, schema: EmployeeSchema}])],
  controllers: [CompanyController],
  providers: [CompanyService]

})
export class CompanyModule {}
