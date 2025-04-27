import { ApiProperty } from '@nestjs/swagger';

export class CommunityResponseDto {
  @ApiProperty({
    example: 1,
    description: 'コミュニティID',
  })
  community_id: number;

  @ApiProperty({
    example: '不登校サポートコミュニティ',
    description: 'コミュニティ名',
  })
  name: string;

  @ApiProperty({
    example: '不登校の子どもを持つ親向けの情報交換の場です',
    description: 'コミュニティの説明',
    required: false,
  })
  description?: string;

  @ApiProperty({
    example: '親支援',
    description: 'コミュニティのカテゴリ',
    required: false,
  })
  category?: string;

  @ApiProperty({
    example: false,
    description: 'プライベートコミュニティかどうか',
  })
  is_private: boolean;

  @ApiProperty({
    example: 1,
    description: 'コミュニティ作成者のユーザーID',
  })
  created_by_user_id: number;

  @ApiProperty({
    example: '2023-01-01T00:00:00Z',
    description: '作成日時',
  })
  created_at: Date;
}
