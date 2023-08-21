import { Module } from '@nestjs/common';
import {PassportModule} from '@nestjs/passport'

import {JwtModule} from '@nestjs/jwt';
import {jwtContants} from './constants'

import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStratgey } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [
    UsersModule, 
    PassportModule,
    JwtModule.register({
      secret: jwtContants.secret,
      signOptions: {expiresIn: '60s'}
    })
  ],
  providers: [AuthService, LocalStratgey, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
