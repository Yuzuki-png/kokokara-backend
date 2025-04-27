import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    })
  );

  const config = new DocumentBuilder()
    .setTitle('KokoKara API')
    .setDescription('KokoKara バックエンドAPI仕様書')
    .setVersion('1.0')
    .addTag('users', 'ユーザー関連API')
    .addTag('communities', 'コミュニティ関連API')
    .addTag('notifications', '通知関連API')
    .addTag('learning', '学習コンテンツ関連API')
    .addTag('resources', 'リソース関連API')
    .addTag('journals', 'ジャーナル関連API')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
