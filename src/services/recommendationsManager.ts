import { getAlbumRecommendations } from './api';
import { Album } from './models';

export const ratingsMap = new Map<string, number>();

export function onRatingChange(albumId: string, newRating: number) {
    if (newRating === 0) {
        ratingsMap.delete(albumId);
    } else {
        ratingsMap.set(albumId, newRating);
    }
}

export function fetchAlbumRecommendations(): Promise<Album[]> {
    return getAlbumRecommendations(ratingsMap);
}
