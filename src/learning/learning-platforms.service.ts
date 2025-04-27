import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LearningPlatform, Prisma } from '@prisma/client';

@Injectable()
export class LearningPlatformsService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.LearningPlatformCreateInput,
  ): Promise<LearningPlatform> {
    return this.prisma.learningPlatform.create({
      data,
    });
  }

  async findAll(): Promise<LearningPlatform[]> {
    return this.prisma.learningPlatform.findMany();
  }

  async findOne(id: number): Promise<LearningPlatform | null> {
    return this.prisma.learningPlatform.findUnique({
      where: { platform_id: id },
    });
  }

  async update(
    id: number,
    data: Prisma.LearningPlatformUpdateInput,
  ): Promise<LearningPlatform> {
    return this.prisma.learningPlatform.update({
      where: { platform_id: id },
      data,
    });
  }

  async remove(id: number): Promise<LearningPlatform> {
    return this.prisma.learningPlatform.delete({
      where: { platform_id: id },
    });
  }
}
