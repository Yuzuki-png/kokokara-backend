import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { LearningPlatformsService } from './learning-platforms.service';
import { CreateLearningPlatformDto } from './dto/create-learning-platform.dto';
import { Prisma } from '@prisma/client';

@Controller('learning-platforms')
export class LearningPlatformsController {
  constructor(private readonly learningPlatformsService: LearningPlatformsService) {}

  @Post()
  create(@Body() createLearningPlatformDto: CreateLearningPlatformDto) {
    return this.learningPlatformsService.create(createLearningPlatformDto);
  }

  @Get()
  findAll() {
    return this.learningPlatformsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.learningPlatformsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLearningPlatformDto: Prisma.LearningPlatformUpdateInput
  ) {
    return this.learningPlatformsService.update(id, updateLearningPlatformDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.learningPlatformsService.remove(id);
  }
}
