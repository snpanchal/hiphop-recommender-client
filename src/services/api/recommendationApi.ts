import axios from 'axios';

import { handleResponse, handleError } from './response';
import { Album } from '../models';

const BASE_API_URL = 'http://localhost:5000';

export function getAlbumRecommendations(
    albumRatings: Map<string, number>,
): Promise<Album[]> {
    // if (albumRatings.size === 0) {
    //     return Promise.resolve<Album[]>([]);
    // }

    const ratingsObj = Object.fromEntries(albumRatings);
    return axios
        .put(`${BASE_API_URL}/recommend/`, { ratings: ratingsObj })
        .then((res) => {
            const response = handleResponse(res);
            return response.albumRecommendations;
        })
        .catch(handleError);
}
