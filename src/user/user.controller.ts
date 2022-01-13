import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response, Request } from 'express';

@Controller('user')
export class UserController {
  @Get()
  // @Redirect('https://google.com', 301)
  getAll(@Req() req: Request, @Res() res: Response) {
    return 'getAllUsers';
  }

  @Get(':id')
  getOne(@Param('id') id) {
    return 'getOne ' + id;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateUserDto) {
    return `name = ${createUserDto.name} + age = ${createUserDto.age}`;
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return 'delete' + id;
  }

  @Put(':id')
  update(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string) {
    return 'update' + id;
  }
}
