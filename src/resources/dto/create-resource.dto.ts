import {
  IsNotEmpty,
  IsString,
  IsEnum,
  IsOptional,
  IsUrl,
} from 'class-validator';
import { RESOURCES_type_enum } from '@prisma/client';

export class CreateResourceDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(RESOURCES_type_enum)
  @IsNotEmpty()
  type: RESOURCES_type_enum;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  website_url?: string;

  @IsString()
  @IsOptional()
  location?: string;

  @IsString()
  @IsOptional()
  contact_info?: string;

  @IsString()
  @IsOptional()
  categories?: string;
}
