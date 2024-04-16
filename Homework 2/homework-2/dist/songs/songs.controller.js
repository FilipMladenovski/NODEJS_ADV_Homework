"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongController = void 0;
const common_1 = require("@nestjs/common");
const songs_service_1 = require("./songs.service");
const song_query_dto_1 = require("./dtos/song-query.dto");
const song_response_dto_1 = require("./dtos/song-response.dto");
const song_create_dto_1 = require("./dtos/song-create.dto");
const song_update_dto_1 = require("./dtos/song-update.dto");
let SongController = class SongController {
    constructor(songService) {
        this.songService = songService;
    }
    getSongs(query) {
        return this.songService.getSongs(query);
    }
    getSongById(id) {
        return this.songService.getSongById(id);
    }
    createSong(body) {
        return this.songService.createSong(body);
    }
    updateSong(id, body) {
        return this.songService.updateSong(id, body);
    }
    deleteSong(id) {
        return this.songService.deleteSong(id);
    }
    findByArtist(artistId) {
        return this.songService.findByArtist(artistId);
    }
    findByGenre(genre) {
        return this.songService.findByGenre(genre);
    }
};
exports.SongController = SongController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [song_query_dto_1.SongQueryDto]),
    __metadata("design:returntype", Array)
], SongController.prototype, "getSongs", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", song_response_dto_1.SongResponseDto)
], SongController.prototype, "getSongById", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [song_create_dto_1.SongCreateDto]),
    __metadata("design:returntype", song_response_dto_1.SongResponseDto)
], SongController.prototype, "createSong", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, song_update_dto_1.SongUpdateDto]),
    __metadata("design:returntype", song_response_dto_1.SongResponseDto)
], SongController.prototype, "updateSong", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SongController.prototype, "deleteSong", null);
__decorate([
    (0, common_1.Get)('artist/:artistId'),
    __param(0, (0, common_1.Param)('artistId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], SongController.prototype, "findByArtist", null);
__decorate([
    (0, common_1.Get)('genre/:genre'),
    __param(0, (0, common_1.Param)('genre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], SongController.prototype, "findByGenre", null);
exports.SongController = SongController = __decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        forbidUnknownValues: true,
        transform: true,
    })),
    (0, common_1.Controller)('songs'),
    __metadata("design:paramtypes", [songs_service_1.SongService])
], SongController);
//# sourceMappingURL=songs.controller.js.map