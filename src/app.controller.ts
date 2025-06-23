import {Body, Controller, Get, Param, Post, UseInterceptors, UsePipes} from '@nestjs/common';
import { AppService } from './app.service';
import {MyInterceptor} from "./app.my.interceptor";
import {IdValidationPipe} from "./app.validation.pipe";
import {regUserDto} from "./dto/reg.user.dto";
import {RegUserValidationPipe} from "./validation/regUser.validation.pipe";

@UseInterceptors(MyInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/:id')
  getAgeInfo(@Param('id', IdValidationPipe) id: string): { id: string } {
    return { id: id };
  }

  @UsePipes(new RegUserValidationPipe())
  @Post('/')
  login(@Body() user: regUserDto) {
    return user;
  }
}
