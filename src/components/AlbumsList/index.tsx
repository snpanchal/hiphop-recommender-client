import React, { useState, useRef, useCallback } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

import AlbumCard from '../AlbumCard';
import useStyles from './styles';
import useAlbumSearch from './useAlbumSearch';
import {
    onRatingChange,
    fetchAlbumRecommendations,
} from '../../services/recommendationsManager';
import { Album } from '../../services/models';

interface AlbumsListProps {
    searchQuery: string;
    showRecommendations: boolean;
}

function AlbumsList({ searchQuery, showRecommendations }: AlbumsListProps) {
    const classes = useStyles();
    const [pageNum, setPageNum] = useState(1);
    const [recommendedAlbums, setRecommendedAlbums] = useState<Album[]>([]);

    const {
        albums,
        loading: loadingAlbums,
        error: albumLoadError,
        hasMore: hasMoreAlbums,
    } = useAlbumSearch(pageNum, searchQuery);

    if (showRecommendations) {
        fetchAlbumRecommendations().then((res) => {
            setRecommendedAlbums(res);
        });
    }

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

    return (
        <div className={classes.gridContainer}>
            <Grid
                container
                spacing={2}
                justify="center"
                className={classes.grid}
            >
                {showRecommendations
                    ? recommendedAlbums.map((album, index) => {
                          return (
                              <Grid item key={index}>
                                  <AlbumCard
                                      album={album}
                                      isRecommendation={true}
                                      onRatingChange={onRatingChange}
                                  />
                              </Grid>
                          );
                      })
                    : albums.map((album, index) => {
                          if (index === albums.length - 1) {
                              return (
                                  <Grid
                                      item
                                      ref={lastAlbumElementRef}
                                      key={index}
                                  >
                                      <AlbumCard
                                          album={album}
                                          isRecommendation={false}
                                          onRatingChange={onRatingChange}
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
                                  />
                              </Grid>
                          );
                      })}
            </Grid>
            {loadingAlbums && (
                <CircularProgress className={classes.loadingSpinner} />
            )}
        </div>
    );
}

export default AlbumsList;
