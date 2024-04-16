import { SongQueryDto } from './dtos/song-query.dto';
import { SongResponseDto } from './dtos/song-response.dto';
import { SongCreateDto } from './dtos/song-create.dto';
import { SongUpdateDto } from './dtos/song-update.dto';
export declare class SongService {
    songs: SongResponseDto[];
    getSongs(query: SongQueryDto): SongResponseDto[];
    getSongById(id: string): SongResponseDto;
    createSong(body: SongCreateDto): SongResponseDto;
    updateSong(id: string, body: SongUpdateDto): SongResponseDto;
    deleteSong(id: string): void;
    findByArtist(id: string): SongResponseDto[];
    findByGenre(genre: string): SongResponseDto[];
}
