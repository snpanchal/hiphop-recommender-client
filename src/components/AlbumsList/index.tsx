import React from 'react';
import { Grid } from '@material-ui/core';

import { Album } from '../../services/models';
import useStyles from './styles';
import AlbumCard from '../AlbumCard';

interface AlbumsListProps {
    albums: Album[];
    onRatingChange(albumId: string, newRating: number): void;
}

function AlbumsList({ albums, onRatingChange }: AlbumsListProps) {
    const classes = useStyles();

    return (
        <Grid container spacing={2} className={classes.grid}>
            {albums.length > 0 &&
                albums.map((album, index) => {
                    console.log(album.name);
                    return (
                        <Grid item key={index}>
                            <AlbumCard
                                album={album}
                                onRatingChange={onRatingChange}
                            />
                        </Grid>
                    );
                })}
        </Grid>
    );
}

export default AlbumsList;
