import { Injectable } from "@nestjs/common";
import {PassportStrategy} from '@nestjs/passport'
import {ExtractJwt, Strategy} from 'passport-jwt'

import {jwtContants} from './constants'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtContants.secret
        })
    }

    async validate(payload: any) {
        console.log('jwt.strategy.ts', payload)

        return {userId: payload.sub, username: payload.username}
    }
}