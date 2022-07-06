import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSubscribeDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/LoginUser.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

  constructor(@InjectRepository(UserEntity)
  private userRepository: Repository<UserEntity>){}


  async subscribe(userSubscribe: UserSubscribeDto) {
    const user = this.userRepository.create({...userSubscribe})
    const salt = 10;
    user.password = await bcrypt.hash(user.password, salt)
    try{
      await this.userRepository.save(user)
    }catch(error){
      throw new HttpException('not found', HttpStatus.NOT_FOUND)
    }
    return this.userRepository.save(userSubscribe)
  }

  login(userlogin: LoginUserDto) {
    return this.userRepository.save(userlogin)
  }

  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
}
