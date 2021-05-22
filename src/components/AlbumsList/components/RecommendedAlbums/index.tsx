import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import AlbumCard from 'src/components/AlbumCard';
import { Album } from 'src/services/models';
import {
    fetchAlbumRecommendations,
    onRatingChange,
} from 'src/services/recommendationsManager';

function RecommendedAlbums() {
    const [recommendedAlbums, setRecommendedAlbums] = useState<Album[]>([]);

    fetchAlbumRecommendations().then((res) => {
        setRecommendedAlbums(res);
    });

    return (
        <>
            {recommendedAlbums.length > 0
                ? recommendedAlbums.map((album, index) => (
                      <Grid item key={index}>
                          <AlbumCard
                              album={album}
                              isRecommendation={true}
                              onRatingChange={onRatingChange}
                          />
                      </Grid>
                  ))
                : 'No recommendations to show.'}
        </>
    );
}

export default RecommendedAlbums;
