import React, { useState } from 'react';
import SpotifyLogo from './spotify_logo.svg';
import {
    Card,
    CardMedia,
    Typography,
    IconButton,
    Icon
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import useStyles from './styles';

const SPOTIFY_ALBUM_BASE_URL = 'https://open.spotify.com/album';

interface AlbumCardProps {
    albumSpotifyId: string;
    albumName: string;
    albumArtists: string;
    albumImageLink: string;
};

function AlbumCard({
    albumSpotifyId,
    albumName,
    albumArtists,
    albumImageLink
}: AlbumCardProps) {
    const classes = useStyles();
    const [albumRating, setAlbumRating] = useState(0);

    return (
        <Card className={classes.root}>
            <CardMedia
                component='img'
                src={albumImageLink}
            />
            <div>
                <div className={classes.albumDetailsContainer}>
                    <Typography className={classes.albumName} gutterBottom variant='h6'>{albumName}</Typography>
                    <br />
                    <Typography className={classes.albumArtists} gutterBottom variant='subtitle1'>{albumArtists}</Typography>
                </div>
                <IconButton
                    className={classes.spotifyLinkButton}
                    disableRipple
                    disableFocusRipple
                    onClick={() => window.open(`${SPOTIFY_ALBUM_BASE_URL}/${albumSpotifyId}`, '_blank')}
                    aria-label='open in Spotify'
                >
                    <Icon className={classes.spotifyLink}>
                        <img src={SpotifyLogo} height='15px' width='15px' alt='Open album in Spotify' />
                    </Icon>
                </IconButton>
            </div>
            <Rating
                className={classes.rating}
                name='simple-controlled'
                value={albumRating}
                precision={0.5}
                size='small'
                onChange={(event, newRating) => {
                    console.log('new rating:', newRating);
                    
                    setAlbumRating(newRating ? newRating : 0);
                }}
            />
        </Card>
    )
}

export default AlbumCard;