import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsString,
  Length,
} from 'class-validator';

export default class UpdateShelterControllerInput {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 11)
  whatsApp: string;

  @IsNotEmpty()
  @IsString()
  @IsNumberString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
}
