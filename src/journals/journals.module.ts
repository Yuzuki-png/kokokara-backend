import { Module } from '@nestjs/common';
import { PositiveJournalsService } from './positive-journals.service';
import { PositiveJournalsController } from './positive-journals.controller';

@Module({
  controllers: [PositiveJournalsController],
  providers: [PositiveJournalsService],
  exports: [PositiveJournalsService],
})
export class JournalsModule {}
