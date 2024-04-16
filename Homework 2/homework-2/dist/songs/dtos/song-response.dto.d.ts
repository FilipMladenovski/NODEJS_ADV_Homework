import { SongCreateDto } from "./song-create.dto";
export declare class SongResponseDto extends SongCreateDto {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
