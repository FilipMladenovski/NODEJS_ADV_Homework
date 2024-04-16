import { Transform } from "class-transformer";
import { IsDate, IsInt, IsNotEmpty, IsString } from "class-validator";


export class SongCreateDto{
    @IsString()
    @IsNotEmpty()
    @Transform(({ value }) => value.trim())
    name: string;

    @IsInt()
    duration : number;

    @IsString()
    @IsNotEmpty()
    genre: string;

    @Transform(({ value }) => new Date(value))
    @IsDate()
    releaseDate: Date;
}