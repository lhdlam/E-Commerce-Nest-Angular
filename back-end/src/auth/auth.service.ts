import { Injectable } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt'

import * as bcrypt from 'bcryptjs'

import { UsersService } from 'src/users/users.service';


@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, 
        private jwtService: JwtService
        ) {}

        async validateUser(username: string, pass: string) {
            const user = await this.usersService.findOne(username)
            let value = bcrypt.compareSync(pass, user.password)
            console.log('bcrypt.compareSync', value)
            if(user && value) {
                const {password, ...result} = user
                return result
            }
            return null 
        }

    async login(user: any) {
        console.log('user in auth service', user)
        const payload = {username: user.username, sub: user.id}
        console.log('payload in auth service', payload)
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

    
}
