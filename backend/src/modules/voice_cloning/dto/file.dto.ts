import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import { Express } from 'express';

export class FileDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: Express.Multer.File;
}

export class TextDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  option: string;
}
