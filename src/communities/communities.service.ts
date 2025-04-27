import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Community, Prisma } from '@prisma/client';

@Injectable()
export class CommunitiesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CommunityCreateInput): Promise<Community> {
    return this.prisma.community.create({
      data,
    });
  }

  async findAll(): Promise<Community[]> {
    return this.prisma.community.findMany();
  }

  async findOne(id: number): Promise<Community | null> {
    return this.prisma.community.findUnique({
      where: { community_id: id },
    });
  }

  async update(id: number, data: Prisma.CommunityUpdateInput): Promise<Community> {
    return this.prisma.community.update({
      where: { community_id: id },
      data,
    });
  }

  async remove(id: number): Promise<Community> {
    return this.prisma.community.delete({
      where: { community_id: id },
    });
  }
}
