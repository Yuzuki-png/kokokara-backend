import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LearningContent, Prisma } from '@prisma/client';

@Injectable()
export class LearningContentsService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.LearningContentCreateInput,
  ): Promise<LearningContent> {
    return this.prisma.learningContent.create({
      data,
    });
  }

  async findAll(): Promise<LearningContent[]> {
    return this.prisma.learningContent.findMany();
  }

  async findByPlatform(platformId: number): Promise<LearningContent[]> {
    return this.prisma.learningContent.findMany({
      where: { platform_id: platformId },
    });
  }

  async findOne(id: number): Promise<LearningContent | null> {
    return this.prisma.learningContent.findUnique({
      where: { content_id: id },
    });
  }

  async update(
    id: number,
    data: Prisma.LearningContentUpdateInput,
  ): Promise<LearningContent> {
    return this.prisma.learningContent.update({
      where: { content_id: id },
      data,
    });
  }

  async remove(id: number): Promise<LearningContent> {
    return this.prisma.learningContent.delete({
      where: { content_id: id },
    });
  }
}
