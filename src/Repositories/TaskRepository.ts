import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../PrismaService';
import { Prisma, Task } from '@prisma/client';

@Injectable()
export default class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async delete(id: number): Promise<Task> {
    return this.prisma.task.delete({
      where: {
        id,
      },
    });
  }

  async save(
    data: Prisma.TaskCreateInput | { id: number; name: string }
  ): Promise<Task> {
    try {
      if (!data.name) {
        throw new BadRequestException('Task name is required');
      }

      if ('id' in data && data.id) {
        const { id, ...updateData } = data;
        return await this.prisma.task.update({
          where: { id },
          data: updateData,
        });
      }

      return await this.prisma.task.create({
        data: { name: data.name },
      });
    } catch (error) {
      throw new Error(`Database operation failed: ${error.message}`);
    }
  }
}
