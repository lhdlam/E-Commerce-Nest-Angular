import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import * as jwt from 'jsonwebtoken'

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

import * as bcrypt from 'bcryptjs'
import { jwtContants } from 'src/auth/constants';
import { Role } from 'src/auth/role.enum';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectEntityManager() private postManager: EntityManager
  ) {}

  async create(createUserDto: CreateUserDto) {
    let newUser: any = {}
    const {password} = createUserDto
    let salt = await bcrypt.genSaltSync(10);
    let hashPassword = await bcrypt.hashSync(password, salt);  
    console.log('hashPassword', hashPassword)

    createUserDto.username && (newUser.username = createUserDto.username)
    hashPassword && (newUser.password = hashPassword);
    if(createUserDto.roles){
      newUser.roles = createUserDto.roles
    }
    else{
      newUser.roles = Role.Member
    }

    console.log('newUser', newUser)
    let newSaveUser = await this.userRepository.create({
      ...newUser
    }) 

    await this.userRepository.save(newSaveUser)

    return newSaveUser

}

  findAll() {
    return `This action returns all users`;
  }

  async findOne(testName: any) {
    const userWithEntityManager = await this.postManager
      .createQueryBuilder(UserEntity, "user")
      .where("user.username= :name", {name: testName})
      .getOne()

      if (!userWithEntityManager) {
        throw new HttpException('Wrong username or password', HttpStatus.NOT_FOUND)
      }

      // console.log('userWithEntityManager', userWithEntityManager)

      return userWithEntityManager;
  }

  async findUserRoleByUserId(id: any) {
    const user = await this.userRepository.findOne(id)

    if(!user) {
      throw new HttpException('No user found by Id', HttpStatus.NOT_FOUND)
    }

    return user.roles
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async verifiedUser(token: any) {
    if (!token) {
      throw new HttpException('Not authorized', HttpStatus.NOT_FOUND)
    }

    try {
      let decoded: any = jwt.verify(token, jwtContants.secret)

      if(!decoded) {
        throw new HttpException('Not authorized', HttpStatus.NOT_FOUND)
      }

      const user = await this.userRepository.findOneOrFail(decoded.sub)

      if (!user) {
        throw new HttpException('No user', HttpStatus.NOT_FOUND)
      }

      if (user) {
        if (user.roles && user.roles === 'admin') {
          return JSON.stringify('Authorized')
        } else {
          throw new HttpException('Not authorized', HttpStatus.NOT_FOUND)
        }
      }
    } catch (err) {
      console.log('error', err)
      return err
    }

  }

}
