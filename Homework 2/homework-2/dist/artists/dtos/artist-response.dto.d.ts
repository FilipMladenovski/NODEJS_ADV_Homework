import { ArtistCreateDto } from "./artist-create.dto";
export declare class ArtistResponseDto extends ArtistCreateDto {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
