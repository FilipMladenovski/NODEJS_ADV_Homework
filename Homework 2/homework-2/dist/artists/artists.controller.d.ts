import { ArtistService } from './artists.service';
import { ArtistCreateDto } from './dtos/artist-create.dto';
import { ArtistResponseDto } from './dtos/artist-response.dto';
import { ArtistUpdateDto } from './dtos/artist-update.dto';
import { ArtistQueryDto } from './dtos/artist-query.dto';
export declare class ArtistController {
    private readonly artistService;
    constructor(artistService: ArtistService);
    getArtists(query: ArtistQueryDto): ArtistResponseDto[];
    createArtist(body: ArtistCreateDto): ArtistResponseDto;
    updateArtist(id: string, body: ArtistUpdateDto): ArtistResponseDto;
    deleteArtist(id: string): void;
    getArtistWithSongs(id: string): ArtistResponseDto;
    getArtistsByGenre(genre: string): ArtistResponseDto[];
}
