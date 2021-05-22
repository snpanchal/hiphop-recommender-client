import axios from 'axios';

import { handleResponse, handleError } from './response';
import { Artist } from '../models';

const BASE_API_URL = 'http://localhost:5000';

export function getAllArtists(): Promise<Artist[]> {
    return axios
        .get(`${BASE_API_URL}/artists`)
        .then((res) => {
            const response = handleResponse(res);
            return response.artists;
        })
        .catch(handleError);
}

export function getArtist(artistId: string): Promise<Artist> {
    return axios
        .get(`${BASE_API_URL}/artists/${artistId}`)
        .then(handleResponse)
        .catch(handleError);
}

export function searchArtist(searchQuery: string): Promise<Artist[]> {
    return axios
        .get(`${BASE_API_URL}/artists/search/${searchQuery}`)
        .then((res) => {
            const response = handleResponse(res);
            return response.artistResults;
        })
        .catch(handleError);
}
