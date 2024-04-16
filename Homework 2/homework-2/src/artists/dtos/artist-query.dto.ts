import { IsEnum, IsOptional } from 'class-validator';
import { Country } from 'src/common/country.enum';


export class ArtistQueryDto {
    @IsEnum(Country)
    @IsOptional()
    country?: Country;
}