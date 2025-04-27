import { ApiProperty } from '@nestjs/swagger';

export class PositiveJournalResponseDto {
  @ApiProperty({
    example: 1,
    description: 'ジャーナルID',
  })
  journal_id: number;

  @ApiProperty({
    example: 1,
    description: 'ユーザーID',
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
  })
  is_favorite: boolean;

  @ApiProperty({
    example: '2023-01-01T00:00:00Z',
    description: 'ジャーナルの日付',
  })
  entry_date: Date;

  @ApiProperty({
    example: '2023-01-01T00:00:00Z',
    description: '作成日時',
  })
  created_at: Date;
}
