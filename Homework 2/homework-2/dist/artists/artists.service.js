"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistService = void 0;
const common_1 = require("@nestjs/common");
let ArtistService = class ArtistService {
    constructor() {
        this.artists = [];
    }
    getArtists(query) {
        let filteredArtists = [...this.artists];
        if (query.country) {
            filteredArtists = filteredArtists.filter((p) => p.country === query.country);
        }
        return filteredArtists;
    }
    createArtist(body) {
        const artist = {
            ...body,
            id: Date.now().toString(),
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.artists.push(artist);
        return artist;
    }
    updateArtist(id, body) {
        const index = this.artists.findIndex((p) => p.id === id);
        if (index < 0) {
            throw new common_1.NotFoundException(`Artist with ${id} doesn't found!`);
        }
        this.artists[index] = {
            ...this.artists[index],
            ...body,
            updatedAt: new Date(),
        };
        return this.artists[index];
    }
    deleteArtist(id) {
        this.artists = this.artists.filter((p) => p.id !== id);
    }
    getArtistWithSongs(id) {
        const artist = this.artistService.findOne(id);
        if (!artist) {
            throw new common_1.NotFoundException(`Artist with id ${id} not found`);
        }
        const songsForArtist = this.songService.findByArtist(id);
        artist.songs = songsForArtist;
        return artist;
    }
    getArtistsByGenre(genre) {
        const allArtists = this.artistService.findAll();
        const artistsWithGenre = allArtists.filter(artist => {
            const songsForArtist = this.songService.findByArtist(artist.id);
            return songsForArtist.some(song => song.genre === genre);
        });
        return artistsWithGenre;
    }
};
exports.ArtistService = ArtistService;
exports.ArtistService = ArtistService = __decorate([
    (0, common_1.Injectable)()
], ArtistService);
//# sourceMappingURL=artists.service.js.map