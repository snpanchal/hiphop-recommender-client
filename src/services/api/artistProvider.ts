import axios from 'axios';

import { handleResponse, handleError } from './response';
import { Artist } from '../models';

const BASE_API_URL = 'http://localhost:5000'

export const getAllArtists = (): Promise<Artist[]> =>
    axios.get(`${BASE_API_URL}/artists`)
        .then(handleResponse)
        .catch(handleError);

export const getArtist = (artistId: string): Promise<Artist> =>
    axios.get(`${BASE_API_URL}/artists/${artistId}`)
        .then(handleResponse)
        .catch(handleError);

export const searchArtist = (searchQuery: string): Promise<Artist[]> =>
    axios.get(`${BASE_API_URL}/artists/search/${searchQuery}`)
        .then(handleResponse)
        .catch(handleError);