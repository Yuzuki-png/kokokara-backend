import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Notification, Prisma } from '@prisma/client';

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.NotificationCreateInput): Promise<Notification> {
    return this.prisma.notification.create({
      data,
    });
  }

  async findAll(): Promise<Notification[]> {
    return this.prisma.notification.findMany();
  }

  async findByUser(userId: number): Promise<Notification[]> {
    return this.prisma.notification.findMany({
      where: { user_id: userId },
    });
  }

  async findOne(id: number): Promise<Notification | null> {
    return this.prisma.notification.findUnique({
      where: { notification_id: id },
    });
  }

  async update(id: number, data: Prisma.NotificationUpdateInput): Promise<Notification> {
    return this.prisma.notification.update({
      where: { notification_id: id },
      data,
    });
  }

  async remove(id: number): Promise<Notification> {
    return this.prisma.notification.delete({
      where: { notification_id: id },
    });
  }

  async markAsRead(id: number): Promise<Notification> {
    return this.prisma.notification.update({
      where: { notification_id: id },
      data: { is_read: true },
    });
  }
}
