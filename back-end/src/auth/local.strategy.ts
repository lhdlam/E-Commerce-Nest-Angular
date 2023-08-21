import { Injectable, UnauthorizedException } from "@nestjs/common";
import {PassportStrategy} from '@nestjs/passport'
import {Strategy} from 'passport-local'
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStratgey extends PassportStrategy(Strategy) {
    constructor(
        private authService: AuthService
    ) {
        super()
    }

    async validate(username: string, password: string) {
        const user = await this.authService.validateUser(username, password)
        console.log('find user in local strategy', user)
        if (!user) {
            throw new UnauthorizedException()
        }
        return user
    }
}