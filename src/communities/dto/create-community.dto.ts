import { ApiProperty } from '@nestjs/swagger';

export class CreateCommunityDto {
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
    required: false,
    default: false,
  })
  is_private?: boolean;

  @ApiProperty({
    example: 1,
    description: 'コミュニティ作成者のユーザーID',
  })
  created_by_user_id: number;
}
