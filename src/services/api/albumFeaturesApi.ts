import axios from 'axios';

import { handleResponse, handleError } from './response';
import { AlbumFeatures } from '../models';

const BASE_API_URL = 'http://localhost:5000';

export function getAlbumFeatures(spotifyId: string): Promise<AlbumFeatures> {
    return axios
        .get(`${BASE_API_URL}/album_features/${spotifyId}`)
        .then(handleResponse)
        .catch(handleError);
}
