import {
  IsNotEmpty,
  IsString,
  IsEnum,
  IsInt,
  IsBoolean,
  IsOptional,
  IsDateString,
} from 'class-validator';
import { NOTIFICATIONS_type_enum } from '@prisma/client';

export class CreateNotificationDto {
  @IsInt()
  @IsNotEmpty()
  user_id: number;

  @IsEnum(NOTIFICATIONS_type_enum)
  @IsNotEmpty()
  type: NOTIFICATIONS_type_enum;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsBoolean()
  @IsOptional()
  is_read?: boolean;

  @IsDateString()
  @IsOptional()
  scheduled_at?: Date;
}
