import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateLearningPlatformDto {
  @IsString()
  @IsNotEmpty()
  platform_name: string;

  @IsString()
  @IsUrl()
  @IsNotEmpty()
  platform_url: string;
}
