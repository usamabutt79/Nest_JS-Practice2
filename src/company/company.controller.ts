import { Body, Controller, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto'

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    @Post('addCompany')
    async addCompany(@Body() CreateCompanyDto: CreateCompanyDto){
        try{
        const u=await this.companyService.addCompany(CreateCompanyDto)
        return u
        }
        catch(e){
          console.error(e);
          return e?.message;
          
        }
      }
}
