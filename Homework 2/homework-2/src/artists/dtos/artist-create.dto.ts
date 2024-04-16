import { Transform } from "class-transformer";
import { IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class ArtistCreateDto {
    @IsString()
    @IsNotEmpty()
    @Transform(({ value }) => value.trim())
    name: string;

    @IsInt()
    @Min(12)
    age: number;

    @IsString()
    @Transform(({ value }) => value.toUpperCase())
    country: string;
}