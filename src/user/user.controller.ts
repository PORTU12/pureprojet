import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserSubscribeDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/LoginUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('subscribe')
  UserSubscribe(@Body() userSubscribe: UserSubscribeDto) {
    return this.userService.subscribe(userSubscribe);
  }

  @Post('login')
  Userlogin(@Body() userlogin: LoginUserDto) {
    return this.userService.login(userlogin);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  /*@Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }*/
}
