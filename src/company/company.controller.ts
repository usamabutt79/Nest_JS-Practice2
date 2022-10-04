import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';

@Controller('company')
export class CompanyController {

  constructor(private readonly companyService: CompanyService) {}

  @Post('addEmployee')
  async addData(@Body() CreateCompanyDto: CreateCompanyDto){
    return await this.companyService.addEmploye(CreateCompanyDto)
  }

}
