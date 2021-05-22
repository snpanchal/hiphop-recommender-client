import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import AlbumCard from '../../../AlbumCard';
import {
    getRatedAlbumsMap,
    onRatingChange,
} from '../../../../services/recommendationsManager';
import { getSeveralAlbums } from '../../../../services/api';
import { Album } from '../../../../services/models';

function RecommendedAlbums() {
    const [ratedAlbums, setRatedAlbums] = useState<Album[]>([]);

    const ratedAlbumsMap = getRatedAlbumsMap();
    const ratedAlbumIds = Array.from(ratedAlbumsMap.keys());
    getSeveralAlbums(ratedAlbumIds.join(',')).then((res) => {
        setRatedAlbums(res);
    });

    return (
        <>
            {ratedAlbums.length > 0
                ? ratedAlbums.map((album, index) => (
                      <Grid item key={index}>
                          <AlbumCard
                              album={album}
                              isRecommendation={false}
                              onRatingChange={onRatingChange}
                              initialRating={ratedAlbumsMap.get(
                                  album.spotify_id,
                              )}
                          />
                      </Grid>
                  ))
                : 'No rated albums to show.'}
        </>
    );
}

export default RecommendedAlbums;
