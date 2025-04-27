import { ApiProperty } from '@nestjs/swagger';

export class CreatePositiveJournalDto {
  @ApiProperty({
    example: 1,
    description: '関連付けるユーザーID',
  })
  user_id: number;

  @ApiProperty({
    example:
      '今日は学校に行くことができました。少しずつ前進していることを実感しています。',
    description: 'ジャーナルの内容',
  })
  content: string;

  @ApiProperty({
    example: false,
    description: 'お気に入りフラグ',
    required: false,
    default: false,
  })
  is_favorite?: boolean;

  @ApiProperty({
    example: '2023-01-01T00:00:00Z',
    description: 'ジャーナルの日付',
  })
  entry_date: Date;
}
