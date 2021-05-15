import React, { useEffect, useState } from 'react';

import AlbumsList from '../AlbumsList';
import { getAllAlbums } from '../../services/api';
import { Album } from '../../services/models';

function AlbumPicker() {
    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        getAllAlbums(2).then((res) => {
            setAlbums(res);
        });
    }, []);

    for (let i = 0; i < 5; i++) {
        console.log(albums[i]);
    }

    const ratingsMap = new Map();

    const onRatingChange = (albumId: string, newRating: number) => {
        ratingsMap.set(albumId, newRating);
    };

    return (
        <div>
            <p>Album Recommendation</p>
            <AlbumsList albums={albums} onRatingChange={onRatingChange} />
        </div>
    );
}

export default AlbumPicker;
