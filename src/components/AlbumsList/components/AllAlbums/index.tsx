import React, { useState, useRef, useCallback } from 'react';
import { Grid } from '@material-ui/core';

import useAlbumsApi from './useAlbumsApi';
import AlbumCard from 'src/components/AlbumCard';
import {
    getRatedAlbumsMap,
    onRatingChange,
} from 'src/services/recommendationsManager';

interface AllAlbumsProps {
    searchQuery: string;
}

function AllAlbums({ searchQuery }: AllAlbumsProps) {
    const [pageNum, setPageNum] = useState(1);

    const {
        albums,
        loading: loadingAlbums,
        error: albumLoadError,
        hasMore: hasMoreAlbums,
    } = useAlbumsApi(pageNum, searchQuery);

    const albumsObserver = useRef<IntersectionObserver | null>(null);
    const lastAlbumElementRef = useCallback(
        (node) => {
            if (loadingAlbums) return;
            if (albumsObserver.current) {
                albumsObserver.current.disconnect();
            }
            albumsObserver.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMoreAlbums) {
                    setPageNum((prevPageNum) => prevPageNum + 1);
                }
            });
            if (node) albumsObserver.current.observe(node);
        },
        [loadingAlbums, hasMoreAlbums],
    );

    const ratedAlbumsMap = getRatedAlbumsMap();

    return (
        <>
            {albums.length > 0 &&
                albums.map((album, index) => {
                    if (index === albums.length - 1) {
                        return (
                            <Grid item ref={lastAlbumElementRef} key={index}>
                                <AlbumCard
                                    album={album}
                                    isRecommendation={false}
                                    onRatingChange={onRatingChange}
                                    initialRating={
                                        ratedAlbumsMap.has(album.spotify_id)
                                            ? ratedAlbumsMap.get(
                                                  album.spotify_id,
                                              )
                                            : 0
                                    }
                                />
                            </Grid>
                        );
                    }
                    return (
                        <Grid item key={index}>
                            <AlbumCard
                                album={album}
                                isRecommendation={false}
                                onRatingChange={onRatingChange}
                                initialRating={
                                    ratedAlbumsMap.has(album.spotify_id)
                                        ? ratedAlbumsMap.get(album.spotify_id)
                                        : 0
                                }
                            />
                        </Grid>
                    );
                })}
        </>
    );
}

export default AllAlbums;
