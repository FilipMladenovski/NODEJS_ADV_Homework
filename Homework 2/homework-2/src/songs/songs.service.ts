// song.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { SongQueryDto } from './dtos/song-query.dto';
import { SongResponseDto } from './dtos/song-response.dto';
import { SongCreateDto } from './dtos/song-create.dto';
import { SongUpdateDto } from './dtos/song-update.dto';

@Injectable()
export class SongService {
  songs: SongResponseDto[] = [];

  getSongs(query: SongQueryDto): SongResponseDto[] {
    let filteredSongs = [...this.songs];

    if (query.genre) {
      filteredSongs = filteredSongs.filter(
        (p) => p.genre === query.genre,
      );
    }
    return filteredSongs;
  }

  getSongById(id: string): SongResponseDto {
    const song = this.songs.find(song => song.id === id);
    if (!song) {
      throw new NotFoundException(`Song with id ${id} not found`);
    }
    return song;
  }

  
  createSong(body: SongCreateDto): SongResponseDto {
    const song = {
      ...body,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    } satisfies SongResponseDto;

    this.songs.push(song);

    return song;
  }

  updateSong(id: string, body: SongUpdateDto): SongResponseDto {
    const index = this.songs.findIndex((p) => p.id === id);

    if (index < 0) {
      throw new NotFoundException(`Songs with ${id} doesn't found!`);
    }

    this.songs[index] = {
      ...this.songs[index],
      ...body,
      updatedAt: new Date(),
    };

    return this.songs[index];
  }

  deleteSong(id: string): void {
    this.songs = this.songs.filter((p) => p.id !== id);
  }

  findByArtist(id: string): SongResponseDto[] {
    return this.songs.filter(song => song.id === id);
  }

  findByGenre(genre: string): SongResponseDto[] {
    return this.songs.filter(song => song.genre === genre);
  }

}
