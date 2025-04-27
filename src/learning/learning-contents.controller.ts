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
import { LearningContentsService } from './learning-contents.service';
import { CreateLearningContentDto } from './dto/create-learning-content.dto';
import { Prisma } from '@prisma/client';

@Controller('learning-contents')
export class LearningContentsController {
  constructor(
    private readonly learningContentsService: LearningContentsService,
  ) {}

  @Post()
  create(@Body() createLearningContentDto: CreateLearningContentDto) {
    const data: Prisma.LearningContentCreateInput = {
      platform: {
        connect: { platform_id: createLearningContentDto.platform_id },
      },
      title: createLearningContentDto.title,
      description: createLearningContentDto.description,
      content_url: createLearningContentDto.content_url,
      grade_level: createLearningContentDto.grade_level,
      subject: createLearningContentDto.subject,
      difficulty_level: createLearningContentDto.difficulty_level,
    };
    return this.learningContentsService.create(data);
  }

  @Get()
  findAll() {
    return this.learningContentsService.findAll();
  }

  @Get('platform/:platformId')
  findByPlatform(@Param('platformId', ParseIntPipe) platformId: number) {
    return this.learningContentsService.findByPlatform(platformId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.learningContentsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLearningContentDto: Prisma.LearningContentUpdateInput,
  ) {
    return this.learningContentsService.update(id, updateLearningContentDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.learningContentsService.remove(id);
  }
}
