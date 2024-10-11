import { IsString, MinLength } from "class-validator";

export class CreateTaskDto {



    id: string;

    @IsString()
    @MinLength(3)
    title: string;

    @IsString()
    @MinLength(3)
    description?: string;

    completed: boolean;


    createdAt: Date;

    updatedAt: Date;
}
