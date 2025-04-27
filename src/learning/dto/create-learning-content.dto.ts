import { IsNotEmpty, IsString, IsInt, IsUrl, IsOptional } from 'class-validator';

export class CreateLearningContentDto {
  @IsInt()
  @IsNotEmpty()
  platform_id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsUrl()
  @IsNotEmpty()
  content_url: string;

  @IsString()
  @IsOptional()
  grade_level?: string;

  @IsString()
  @IsOptional()
  subject?: string;

  @IsInt()
  @IsOptional()
  difficulty_level?: number;
}
