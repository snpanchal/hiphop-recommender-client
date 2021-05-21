import React from 'react';
import {
    Card,
    CardMedia,
    Typography,
    IconButton,
    Icon,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import useStyles from './styles';
import { Album } from '../../services/models';

import SpotifyLogo from './spotify_logo.svg';

const SPOTIFY_ALBUM_BASE_URL = 'https://open.spotify.com/album';

interface AlbumCardProps {
    album: Album;
    isRecommendation: boolean;
    onRatingChange(albumId: string, newRating: number): void;
}

function AlbumCard({
    album,
    isRecommendation,
    onRatingChange,
}: AlbumCardProps) {
    const classes = useStyles();

    const handleRatingChange = (newRating: number | null) => {
        const rating = newRating ? newRating : 0;
        onRatingChange(album.spotify_id, rating);
    };

    return (
        <Card className={classes.root}>
            <CardMedia component="img" src={album.image_link} />
            <div>
                <div className={classes.albumDetailsContainer}>
                    <Typography className={classes.albumName} gutterBottom>
                        {album.name}
                    </Typography>
                    <br />
                    <Typography className={classes.albumArtists} gutterBottom>
                        {album.artists?.map((artist) => artist.name).join(', ')}
                    </Typography>
                </div>
                <IconButton
                    className={classes.spotifyLinkButton}
                    disableRipple
                    disableFocusRipple
                    onClick={() =>
                        window.open(
                            `${SPOTIFY_ALBUM_BASE_URL}/${album.spotify_id}`,
                            '_blank',
                        )
                    }
                    aria-label="Open in Spotify"
                >
                    <Icon className={classes.spotifyLink}>
                        <img
                            src={SpotifyLogo}
                            height="15px"
                            width="15px"
                            alt={`Open ${album.name} in Spotify`}
                            title={`Open ${album.name} in Spotify`}
                        />
                    </Icon>
                </IconButton>
            </div>
            {!isRecommendation && (
                <Rating
                    className={classes.rating}
                    size="small"
                    precision={0.5}
                    onChange={(event, newRating) =>
                        handleRatingChange(newRating)
                    }
                />
            )}
        </Card>
    );
}

export default AlbumCard;
