import { Module } from '@nestjs/common';
import { SongService } from './songs.service';
import { SongController } from './songs.controller';

@Module({
  providers: [SongService],
  controllers: [SongController]
})
export class SongsModule {}
