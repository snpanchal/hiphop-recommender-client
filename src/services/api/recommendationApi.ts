import axios from 'axios';

import { handleResponse, handleError } from './response';
import { Album } from '../models';

const BASE_API_URL = 'http://localhost:5000';

export const getAlbumRecommendations = (albumRatings: any): Promise<Album[]> =>
    axios
        .put(`${BASE_API_URL}/recommend`, albumRatings)
        .then((res) => {
            const response = handleResponse(res);
            return response.albumRecommendations;
        })
        .catch(handleError);
