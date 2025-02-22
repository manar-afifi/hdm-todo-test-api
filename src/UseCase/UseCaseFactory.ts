import { Injectable } from '@nestjs/common';
import ServiceFactory from '../ServiceFactory';
import DeleteTask from './DeleteTask/DeleteTask';
import GetAllTasksUseCase from './GetAllTasks/GetAllTasksUseCase';
import SaveTaskUseCase from './SaveTask/SaveTaskUseCase';
import ToggleTaskUseCase from '../UseCase/ToggleTasks/ToggleTaskUseCase';

type UseCases =
  | GetAllTasksUseCase
  | DeleteTask
  | SaveTaskUseCase
  | ToggleTaskUseCase;

@Injectable()
export default class UseCaseFactory extends ServiceFactory<UseCases> {}
