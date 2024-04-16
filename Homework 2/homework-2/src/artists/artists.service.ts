import { ArtistUpdateDto } from './dtos/artist-update.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ArtistCreateDto } from './dtos/artist-create.dto';
import { ArtistResponseDto } from './dtos/artist-response.dto';
import { ArtistQueryDto } from './dtos/artist-query.dto';

@Injectable()
export class ArtistService {
  artists: ArtistResponseDto[] = [];
  artistService: any;
  songService: any;

  getArtists(query: ArtistQueryDto): ArtistResponseDto[] {
    let filteredArtists = [...this.artists];

    if (query.country) {
      filteredArtists = filteredArtists.filter(
        (p) => p.country === query.country,
      );
    }
    return filteredArtists;
  }
  
  createArtist(body: ArtistCreateDto): ArtistResponseDto {
    const artist = {
      ...body,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    } satisfies ArtistResponseDto;

    this.artists.push(artist);

    return artist;
  }

  updateArtist(id: string, body: ArtistUpdateDto): ArtistResponseDto {
    const index = this.artists.findIndex((p) => p.id === id);

    if (index < 0) {
      throw new NotFoundException(`Artist with ${id} doesn't found!`);
    }

    this.artists[index] = {
      ...this.artists[index],
      ...body,
      updatedAt: new Date(),
    };

    return this.artists[index];
  }

  deleteArtist(id: string): void {
    this.artists = this.artists.filter((p) => p.id !== id);
  }
  getArtistWithSongs(id: string): ArtistResponseDto {
    const artist = this.artistService.findOne(id);
    if (!artist) {
      throw new NotFoundException(`Artist with id ${id} not found`);
    }
    const songsForArtist = this.songService.findByArtist(id);
    artist.songs = songsForArtist;
    return artist;
  }

  getArtistsByGenre(genre: string): ArtistResponseDto[] {
    const allArtists = this.artistService.findAll();
    const artistsWithGenre = allArtists.filter(artist => {
      const songsForArtist = this.songService.findByArtist(artist.id);
      return songsForArtist.some(song => song.genre === genre);
    });
    return artistsWithGenre;
  }
}

