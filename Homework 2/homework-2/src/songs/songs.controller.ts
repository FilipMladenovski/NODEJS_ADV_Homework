// song.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe, Query } from '@nestjs/common';
import { SongService } from './songs.service';
import { SongQueryDto } from './dtos/song-query.dto';
import { SongResponseDto } from './dtos/song-response.dto';
import { SongCreateDto } from './dtos/song-create.dto';
import { SongUpdateDto } from './dtos/song-update.dto';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidUnknownValues: true,
    transform: true,
  }),
)

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) { }

  @Get('/')
  getSongs(@Query() query: SongQueryDto ): SongResponseDto[] {
    return this.songService.getSongs(query);
  }

  @Get('/:id')
  getSongById(@Param('id') id: string): SongResponseDto {
    return this.songService.getSongById(id);
  }

  @Post('/')
  createSong(@Body() body: SongCreateDto): SongResponseDto {
    return this.songService.createSong(body);
  }

  @Put('/:id')
  updateSong(
    @Param('id') id: string,
    @Body() body: SongUpdateDto,
  ): SongResponseDto {
    return this.songService.updateSong(id, body);
  }

  @Delete('/:id')
  deleteSong(@Param('id') id: string): void {
    return this.songService.deleteSong(id);
  }
  @Get('artist/:artistId')
  findByArtist(@Param('artistId') artistId: string): SongResponseDto[] {
    return this.songService.findByArtist(artistId);
  }

  @Get('genre/:genre')
  findByGenre(@Param('genre') genre: string): SongResponseDto[] {
    return this.songService.findByGenre(genre);
  }


}
