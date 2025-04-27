import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CommunitiesService } from './communities.service';
import { Prisma } from '@prisma/client';
import { CreateCommunityDto } from './dto/create-community.dto';
import { CommunityResponseDto } from './dto/community-response.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';

@ApiTags('communities')
@ApiBearerAuth()
@Controller('communities')
export class CommunitiesController {
  constructor(private readonly communitiesService: CommunitiesService) {}

  @Post()
  @ApiOperation({ summary: 'コミュニティを作成' })
  @ApiResponse({
    status: 201,
    description: 'コミュニティが正常に作成されました。',
    type: CommunityResponseDto,
  })
  @ApiResponse({ status: 400, description: '無効なリクエストデータ' })
  create(@Body() createCommunityDto: CreateCommunityDto) {
    const data: Prisma.CommunityCreateInput = {
      name: createCommunityDto.name,
      description: createCommunityDto.description,
      category: createCommunityDto.category,
      is_private: createCommunityDto.is_private,
      createdBy: {
        connect: { user_id: createCommunityDto.created_by_user_id },
      },
    };
    return this.communitiesService.create(data);
  }

  @Get()
  @ApiOperation({ summary: '全コミュニティを取得' })
  @ApiResponse({
    status: 200,
    description: '成功',
    type: [CommunityResponseDto],
  })
  findAll() {
    return this.communitiesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'IDによるコミュニティ取得' })
  @ApiParam({ name: 'id', type: 'number', description: 'コミュニティID' })
  @ApiResponse({ status: 200, description: '成功', type: CommunityResponseDto })
  @ApiResponse({ status: 404, description: 'コミュニティが見つかりません' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.communitiesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'コミュニティ情報の更新' })
  @ApiParam({ name: 'id', type: 'number', description: 'コミュニティID' })
  @ApiResponse({ status: 200, description: '成功', type: CommunityResponseDto })
  @ApiResponse({ status: 400, description: '無効なリクエストデータ' })
  @ApiResponse({ status: 404, description: 'コミュニティが見つかりません' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCommunityDto: Prisma.CommunityUpdateInput,
  ) {
    return this.communitiesService.update(id, updateCommunityDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'コミュニティの削除' })
  @ApiParam({ name: 'id', type: 'number', description: 'コミュニティID' })
  @ApiResponse({ status: 200, description: '成功', type: CommunityResponseDto })
  @ApiResponse({ status: 404, description: 'コミュニティが見つかりません' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.communitiesService.remove(id);
  }
}
