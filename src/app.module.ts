import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './company/employee.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [CompanyModule, EmployeeModule, MongooseModule.forRoot('mongodb+srv://usamabutt786:18134156-079@cluster0.ajmez0k.mongodb.net/Nest_Practice2')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
