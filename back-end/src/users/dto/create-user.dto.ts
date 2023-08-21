import { IsString } from "class-validator";
import { Role } from "src/auth/role.enum";

export class CreateUserDto {
    @IsString()
    username: string;

    @IsString()
    password: string 

    @IsString()
    roles: Role
}
