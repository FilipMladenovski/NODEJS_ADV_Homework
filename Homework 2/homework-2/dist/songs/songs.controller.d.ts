import { SongService } from './songs.service';
import { SongQueryDto } from './dtos/song-query.dto';
import { SongResponseDto } from './dtos/song-response.dto';
import { SongCreateDto } from './dtos/song-create.dto';
import { SongUpdateDto } from './dtos/song-update.dto';
export declare class SongController {
    private readonly songService;
    constructor(songService: SongService);
    getSongs(query: SongQueryDto): SongResponseDto[];
    getSongById(id: string): SongResponseDto;
    createSong(body: SongCreateDto): SongResponseDto;
    updateSong(id: string, body: SongUpdateDto): SongResponseDto;
    deleteSong(id: string): void;
    findByArtist(artistId: string): SongResponseDto[];
    findByGenre(genre: string): SongResponseDto[];
}
