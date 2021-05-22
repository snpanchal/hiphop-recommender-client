import axios from 'axios';

import { handleResponse, handleError } from './response';
import { Album } from '../models';

const BASE_API_URL = 'http://localhost:5000';

export function getAllAlbums(
    pageNum: number,
    searchQuery: string,
): Promise<Album[]> {
    const params = {
        page: pageNum,
        q: searchQuery,
    };

    return axios
        .get(`${BASE_API_URL}/albums`, { params })
        .then((res) => {
            const response = handleResponse(res);
            return response.albums;
        })
        .catch(handleError);
}

export function getSeveralAlbums(albumIds: string): Promise<Album[]> {
    // if (!albumIds) {
    //     return Promise.resolve<Album[]>([]);
    // }

    return axios
        .get(`${BASE_API_URL}/albums`, { params: { ids: albumIds } })
        .then((res) => {
            const response = handleResponse(res);
            return response.albums;
        })
        .catch(handleError);
}

export function getAlbum(spotifyId: string): Promise<Album> {
    return axios
        .get(`${BASE_API_URL}/albums/${spotifyId}`)
        .then(handleResponse)
        .catch(handleError);
}

export function searchAlbum(searchQuery: string): Promise<Album[]> {
    return axios
        .get(`${BASE_API_URL}/albums/search/${searchQuery}`)
        .then((res) => {
            const response = handleResponse(res);
            return response.albumResults;
        })
        .catch(handleError);
}
