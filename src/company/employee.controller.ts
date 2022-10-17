import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common/decorators';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {

  constructor(private readonly employeeService: EmployeeService) {}

  @Post('addEmployee')
  async addData(@Body() CreateEmployeeDto: CreateEmployeeDto){
    try{
    const u=await this.employeeService.addEmploye(CreateEmployeeDto)
    return u
    }
    catch(e){
      console.error(e);
      return e?.message;
      
    }
  }

  @Get('getAllEmployee')
  async getdata(){
    return this.employeeService.getAllEmployee();
  }

  @Get('getOneEmployee')
  async getOne(@Query('id') id: string){
    return await this.employeeService.findOne(id);
  }

  @Get('getDataWithQuery')
  async getDataWithQuery(){
    return await this.employeeService.findWithQuery();
  }

  @Put('UpdateWithQuery/:id')
  async UpdatWithQuery(@Param('id') id:string){
    return await this.employeeService.updateWithQuery(id)
  }

  @Patch('updateEmployee/:name')
  async updateEmployeeData(@Param('name') emp_name:any, @Body() updateCompanyDto: UpdateEmployeeDto){
    return await this.employeeService.updateEmployee({emp_name,...updateCompanyDto});
  }

  @Delete('delteEmployee/:id')
  async deleteOneEmployee(@Param('id') id:string){
    return await this.employeeService.deleteEmployee(id);
  }

  @Delete('deleteAllEmployee')
  async deleteAllData(){
    return await this.employeeService.deleteAllEmployee();
  }
}
