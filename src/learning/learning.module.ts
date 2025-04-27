import { Module } from '@nestjs/common';
import { LearningPlatformsService } from './learning-platforms.service';
import { LearningPlatformsController } from './learning-platforms.controller';
import { LearningContentsService } from './learning-contents.service';
import { LearningContentsController } from './learning-contents.controller';

@Module({
  controllers: [LearningPlatformsController, LearningContentsController],
  providers: [LearningPlatformsService, LearningContentsService],
  exports: [LearningPlatformsService, LearningContentsService],
})
export class LearningModule {}
