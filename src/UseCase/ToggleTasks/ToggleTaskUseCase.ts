import { Injectable, BadRequestException } from '@nestjs/common';
import { Task } from '@prisma/client';
import { UseCase } from '../../index';
import TaskRepository from '../../Repositories/TaskRepository';

@Injectable()
export default class ToggleTaskUseCase
  implements UseCase<Promise<Task>, [id: number]>
{
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle(id: number) {
    try {
      return await this.taskRepository.toggleCompleted(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
