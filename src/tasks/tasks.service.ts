import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TasksService {
  //Traer el Prisma Service

  constructor(private prisma: PrismaService) {}

  create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({ data:{ ...createTaskDto} });
  }

  findAll() {
    return this.prisma.task.findMany();
  }

  findOne(id: string) {
    const taskFound =  this.prisma.task.findUnique({ where: { id } });
    if(!taskFound) throw new Error('Task not found');
    return taskFound;
  }

  taskCompleted(id: string){
    const taskCompleted = this.findOne(id);

    if(!taskCompleted) throw new Error('Task not found');
    return this.prisma.task.update({ where: { id }, data: { completed: true } });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
