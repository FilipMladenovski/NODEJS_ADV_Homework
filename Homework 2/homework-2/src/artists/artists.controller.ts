import { Controller, Get, Post, Put, Delete, Param, Body, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ArtistService } from './artists.service';
import { ArtistCreateDto } from './dtos/artist-create.dto';
import { ArtistResponseDto } from './dtos/artist-response.dto';
import { ArtistUpdateDto } from './dtos/artist-update.dto';
import { ArtistQueryDto } from './dtos/artist-query.dto';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidUnknownValues: true,
    transform: true,
  }),
)

@Controller('artists')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) { }

  @Get('/')
  getArtists(@Query() query: ArtistQueryDto): ArtistResponseDto[] {
    return this.artistService.getArtists(query);
  }

  @Post('/')
  createArtist(@Body() body: ArtistCreateDto): ArtistResponseDto {
    return this.artistService.createArtist(body);
  }

  @Put('/:id')
  updateArtist(
    @Param('id') id: string,
    @Body() body: ArtistUpdateDto,
  ): ArtistResponseDto {
    return this.artistService.updateArtist(id, body);
  }

  @Delete('/:id')
  deleteArtist(@Param('id') id: string): void {
    return this.artistService.deleteArtist(id);
  }

  @Get(':id/songs')
  getArtistWithSongs(@Param('id') id: string): ArtistResponseDto {
    return this.artistService.getArtistWithSongs(id);
  }

  @Get('by-genre')
  getArtistsByGenre(@Query('genre') genre: string): ArtistResponseDto[] {
    return this.artistService.getArtistsByGenre(genre);
  }


}
