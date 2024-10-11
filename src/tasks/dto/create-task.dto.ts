import { IsBoolean, IsDate, IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class CreateTaskDto {


    @IsUUID()
    @IsOptional()
    id: string;

    @IsString()
    @MinLength(3)
    title: string;

    @IsString()
    @MinLength(3)
    @IsOptional()
    description: string;

    @IsBoolean()
    @IsOptional()
    completed: boolean;

    @IsDate()
    @IsOptional()
    createdAt: Date;

    @IsDate()
    @IsOptional()
    updatedAt: Date;
}
