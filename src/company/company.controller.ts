import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common/decorators';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {

  constructor(private readonly companyService: CompanyService) {}

  @Post('addEmployee')
  async addData(@Body() CreateCompanyDto: CreateCompanyDto){
    return await this.companyService.addEmploye(CreateCompanyDto)
  }

  @Get('getAllEmployee')
  async getdata(){
    return this.companyService.getAllEmployee();
  }

  @Get('getOneEmployee')
  async getOne(@Query('id') id: string){
    return await this.companyService.findOne(id);
  }

  @Patch('updateEmployee/:name')
  async updateEmployeeData(@Param('name') emp_name:any, @Body() updateCompanyDto: UpdateCompanyDto){
    return await this.companyService.updateEmployee({emp_name,...updateCompanyDto});
  }

  @Delete('delteEmployee/:id')
  async deleteOneEmployee(@Param('id') id:string){
    return await this.companyService.deleteEmployee(id);
  }

  @Delete('deleteAllEmployee')
  async deleteAllData(){
    return await this.companyService.deleteAllEmployee();
  }
}
