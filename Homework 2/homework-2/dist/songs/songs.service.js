"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongService = void 0;
const common_1 = require("@nestjs/common");
let SongService = class SongService {
    constructor() {
        this.songs = [];
    }
    getSongs(query) {
        let filteredSongs = [...this.songs];
        if (query.genre) {
            filteredSongs = filteredSongs.filter((p) => p.genre === query.genre);
        }
        return filteredSongs;
    }
    getSongById(id) {
        const song = this.songs.find(song => song.id === id);
        if (!song) {
            throw new common_1.NotFoundException(`Song with id ${id} not found`);
        }
        return song;
    }
    createSong(body) {
        const song = {
            ...body,
            id: Date.now().toString(),
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.songs.push(song);
        return song;
    }
    updateSong(id, body) {
        const index = this.songs.findIndex((p) => p.id === id);
        if (index < 0) {
            throw new common_1.NotFoundException(`Songs with ${id} doesn't found!`);
        }
        this.songs[index] = {
            ...this.songs[index],
            ...body,
            updatedAt: new Date(),
        };
        return this.songs[index];
    }
    deleteSong(id) {
        this.songs = this.songs.filter((p) => p.id !== id);
    }
    findByArtist(id) {
        return this.songs.filter(song => song.id === id);
    }
    findByGenre(genre) {
        return this.songs.filter(song => song.genre === genre);
    }
};
exports.SongService = SongService;
exports.SongService = SongService = __decorate([
    (0, common_1.Injectable)()
], SongService);
//# sourceMappingURL=songs.service.js.map