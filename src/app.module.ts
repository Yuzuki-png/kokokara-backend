import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { CommunitiesModule } from './communities/communities.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ResourcesModule } from './resources/resources.module';
import { LearningModule } from './learning/learning.module';
import { JournalsModule } from './journals/journals.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    CommunitiesModule,
    NotificationsModule,
    ResourcesModule,
    LearningModule,
    JournalsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
