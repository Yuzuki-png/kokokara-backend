import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({
    example: 1,
    description: 'ユーザーID',
  })
  user_id: number;

  @ApiProperty({
    example: 'user@example.com',
    description: 'メールアドレス',
  })
  email: string;

  @ApiProperty({
    example: 'パスワードハッシュ（実際のレスポンスには含めるべきでない）',
    description: 'パスワードハッシュ',
  })
  password_hash: string;

  @ApiProperty({
    example: true,
    description: 'メール確認済み',
  })
  email_verified: boolean;

  @ApiProperty({
    example: true,
    description: '親の同意',
    required: false,
  })
  parent_consent?: boolean;

  @ApiProperty({
    example: '2023-01-01T00:00:00Z',
    description: '最終ログイン日時',
    required: false,
  })
  last_login?: Date;

  @ApiProperty({
    example: '2023-01-01T00:00:00Z',
    description: '作成日時',
  })
  created_at: Date;
}
