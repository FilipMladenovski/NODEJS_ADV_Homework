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
exports.ArtistController = void 0;
const common_1 = require("@nestjs/common");
const artists_service_1 = require("./artists.service");
const artist_create_dto_1 = require("./dtos/artist-create.dto");
const artist_response_dto_1 = require("./dtos/artist-response.dto");
const artist_update_dto_1 = require("./dtos/artist-update.dto");
const artist_query_dto_1 = require("./dtos/artist-query.dto");
let ArtistController = class ArtistController {
    constructor(artistService) {
        this.artistService = artistService;
    }
    getArtists(query) {
        return this.artistService.getArtists(query);
    }
    createArtist(body) {
        return this.artistService.createArtist(body);
    }
    updateArtist(id, body) {
        return this.artistService.updateArtist(id, body);
    }
    deleteArtist(id) {
        return this.artistService.deleteArtist(id);
    }
    getArtistWithSongs(id) {
        return this.artistService.getArtistWithSongs(id);
    }
    getArtistsByGenre(genre) {
        return this.artistService.getArtistsByGenre(genre);
    }
};
exports.ArtistController = ArtistController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [artist_query_dto_1.ArtistQueryDto]),
    __metadata("design:returntype", Array)
], ArtistController.prototype, "getArtists", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [artist_create_dto_1.ArtistCreateDto]),
    __metadata("design:returntype", artist_response_dto_1.ArtistResponseDto)
], ArtistController.prototype, "createArtist", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, artist_update_dto_1.ArtistUpdateDto]),
    __metadata("design:returntype", artist_response_dto_1.ArtistResponseDto)
], ArtistController.prototype, "updateArtist", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArtistController.prototype, "deleteArtist", null);
__decorate([
    (0, common_1.Get)(':id/songs'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", artist_response_dto_1.ArtistResponseDto)
], ArtistController.prototype, "getArtistWithSongs", null);
__decorate([
    (0, common_1.Get)('by-genre'),
    __param(0, (0, common_1.Query)('genre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], ArtistController.prototype, "getArtistsByGenre", null);
exports.ArtistController = ArtistController = __decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        forbidUnknownValues: true,
        transform: true,
    })),
    (0, common_1.Controller)('artists'),
    __metadata("design:paramtypes", [artists_service_1.ArtistService])
], ArtistController);
//# sourceMappingURL=artists.controller.js.map