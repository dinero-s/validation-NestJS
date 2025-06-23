import { IsDefined, IsEmail, IsString} from "class-validator";

export class regUserDto {
    @IsEmail()
    @IsDefined()
    public email: string;
    @IsString()
    @IsDefined()
    public password: string;
}