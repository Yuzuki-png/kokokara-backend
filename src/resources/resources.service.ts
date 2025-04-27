import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Resource, Prisma, RESOURCES_type_enum } from '@prisma/client';

@Injectable()
export class ResourcesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ResourceCreateInput): Promise<Resource> {
    return this.prisma.resource.create({
      data,
    });
  }

  async findAll(): Promise<Resource[]> {
    return this.prisma.resource.findMany();
  }

  async findByType(type: RESOURCES_type_enum): Promise<Resource[]> {
    return this.prisma.resource.findMany({
      where: { type },
    });
  }

  async findOne(id: number): Promise<Resource | null> {
    return this.prisma.resource.findUnique({
      where: { resource_id: id },
    });
  }

  async update(
    id: number,
    data: Prisma.ResourceUpdateInput,
  ): Promise<Resource> {
    return this.prisma.resource.update({
      where: { resource_id: id },
      data,
    });
  }

  async remove(id: number): Promise<Resource> {
    return this.prisma.resource.delete({
      where: { resource_id: id },
    });
  }
}
