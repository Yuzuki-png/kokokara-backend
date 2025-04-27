import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PositiveJournal, Prisma } from '@prisma/client';

@Injectable()
export class PositiveJournalsService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.PositiveJournalCreateInput,
  ): Promise<PositiveJournal> {
    return this.prisma.positiveJournal.create({
      data,
    });
  }

  async findAll(): Promise<PositiveJournal[]> {
    return this.prisma.positiveJournal.findMany();
  }

  async findByUser(userId: number): Promise<PositiveJournal[]> {
    return this.prisma.positiveJournal.findMany({
      where: { user_id: userId },
    });
  }

  async findFavoritesByUser(userId: number): Promise<PositiveJournal[]> {
    return this.prisma.positiveJournal.findMany({
      where: {
        user_id: userId,
        is_favorite: true,
      },
    });
  }

  async findOne(id: number): Promise<PositiveJournal | null> {
    return this.prisma.positiveJournal.findUnique({
      where: { journal_id: id },
    });
  }

  async update(
    id: number,
    data: Prisma.PositiveJournalUpdateInput,
  ): Promise<PositiveJournal> {
    return this.prisma.positiveJournal.update({
      where: { journal_id: id },
      data,
    });
  }

  async toggleFavorite(id: number): Promise<PositiveJournal> {
    const journal = await this.findOne(id);
    if (!journal) {
      throw new NotFoundException(`Journal with ID ${id} not found`);
    }
    return this.prisma.positiveJournal.update({
      where: { journal_id: id },
      data: { is_favorite: !journal.is_favorite },
    });
  }

  async remove(id: number): Promise<PositiveJournal> {
    return this.prisma.positiveJournal.delete({
      where: { journal_id: id },
    });
  }
}
