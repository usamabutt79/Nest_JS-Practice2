import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common/decorators';
import { CompanyService } from './company.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('company')
export class CompanyController {

  constructor(private readonly companyService: CompanyService) {}

  @Post('addEmployee')
  async addData(@Body() CreateEmployeeDto: CreateEmployeeDto){
    try{
    const u=await this.companyService.addEmploye(CreateEmployeeDto)
    return u
    }
    catch(e){
      console.error(e);
      return e?.message;
      
    }
  }

  @Get('getAllEmployee')
  async getdata(){
    return this.companyService.getAllEmployee();
  }

  @Get('getOneEmployee')
  async getOne(@Query('id') id: string){
    return await this.companyService.findOne(id);
  }

  @Get('getDataWithQuery')
  async getDataWithQuery(){
    return await this.companyService.findWithQuery();
  }

  @Put('UpdateWithQuery/:id')
  async UpdatWithQuery(@Param('id') id:string){
    return await this.companyService.updateWithQuery(id)
  }

  @Patch('updateEmployee/:name')
  async updateEmployeeData(@Param('name') emp_name:any, @Body() updateCompanyDto: UpdateEmployeeDto){
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
