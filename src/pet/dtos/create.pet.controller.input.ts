import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export default class CreatePetControllerInput {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nome do pet' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Tipo do pet' })
  type: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Tamanho do pet' })
  size: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Gênero do pet' })
  gender: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1024)
  @ApiProperty({ description: 'Bio do pet' })
  bio: string;
}
