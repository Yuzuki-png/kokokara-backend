import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PositiveJournalsService } from './positive-journals.service';
import { CreatePositiveJournalDto } from './dto/create-positive-journal.dto';
import { PositiveJournalResponseDto } from './dto/positive-journal-response.dto';
import { Prisma } from '@prisma/client';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('journals')
@ApiBearerAuth()
@Controller('positive-journals')
export class PositiveJournalsController {
  constructor(private readonly positiveJournalsService: PositiveJournalsService) {}

  @Post()
  @ApiOperation({ summary: 'ポジティブジャーナルを作成' })
  @ApiResponse({
    status: 201,
    description: 'ジャーナルが正常に作成されました。',
    type: PositiveJournalResponseDto,
  })
  @ApiResponse({ status: 400, description: '無効なリクエストデータ' })
  create(@Body() createPositiveJournalDto: CreatePositiveJournalDto) {
    return this.positiveJournalsService.create({
      user: {
        connect: { user_id: createPositiveJournalDto.user_id },
      },
      content: createPositiveJournalDto.content,
      is_favorite: createPositiveJournalDto.is_favorite || false,
      entry_date: createPositiveJournalDto.entry_date,
    });
  }

  @Get()
  @ApiOperation({ summary: '全ジャーナルを取得' })
  @ApiResponse({
    status: 200,
    description: '成功',
    type: [PositiveJournalResponseDto],
  })
  findAll() {
    return this.positiveJournalsService.findAll();
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'ユーザーIDによるジャーナル取得' })
  @ApiParam({ name: 'userId', type: 'number', description: 'ユーザーID' })
  @ApiResponse({
    status: 200,
    description: '成功',
    type: [PositiveJournalResponseDto],
  })
  findByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.positiveJournalsService.findByUser(userId);
  }

  @Get('user/:userId/favorites')
  @ApiOperation({ summary: 'ユーザーのお気に入りジャーナルを取得' })
  @ApiParam({ name: 'userId', type: 'number', description: 'ユーザーID' })
  @ApiResponse({
    status: 200,
    description: '成功',
    type: [PositiveJournalResponseDto],
  })
  findFavoritesByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.positiveJournalsService.findFavoritesByUser(userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'IDによるジャーナル取得' })
  @ApiParam({ name: 'id', type: 'number', description: 'ジャーナルID' })
  @ApiResponse({
    status: 200,
    description: '成功',
    type: PositiveJournalResponseDto,
  })
  @ApiResponse({ status: 404, description: 'ジャーナルが見つかりません' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.positiveJournalsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'ジャーナルの更新' })
  @ApiParam({ name: 'id', type: 'number', description: 'ジャーナルID' })
  @ApiResponse({
    status: 200,
    description: '成功',
    type: PositiveJournalResponseDto,
  })
  @ApiResponse({ status: 404, description: 'ジャーナルが見つかりません' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePositiveJournalDto: Prisma.PositiveJournalUpdateInput
  ) {
    return this.positiveJournalsService.update(id, updatePositiveJournalDto);
  }

  @Patch(':id/toggle-favorite')
  @ApiOperation({ summary: 'ジャーナルのお気に入り状態を切り替え' })
  @ApiParam({ name: 'id', type: 'number', description: 'ジャーナルID' })
  @ApiResponse({
    status: 200,
    description: '成功',
    type: PositiveJournalResponseDto,
  })
  @ApiResponse({ status: 404, description: 'ジャーナルが見つかりません' })
  toggleFavorite(@Param('id', ParseIntPipe) id: number) {
    return this.positiveJournalsService.toggleFavorite(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'ジャーナルの削除' })
  @ApiParam({ name: 'id', type: 'number', description: 'ジャーナルID' })
  @ApiResponse({
    status: 200,
    description: '成功',
    type: PositiveJournalResponseDto,
  })
  @ApiResponse({ status: 404, description: 'ジャーナルが見つかりません' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.positiveJournalsService.remove(id);
  }
}
