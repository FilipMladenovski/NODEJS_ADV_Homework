import { IsEnum, IsOptional } from "class-validator";
import { Genre } from "src/common/genre.enum";
export class SongQueryDto{
    @IsEnum(Genre)
    @IsOptional()
    genre?: Genre;
}