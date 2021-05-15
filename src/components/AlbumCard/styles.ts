import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    root: {
        maxWidth: 210,
        background: '#292626',
        textAlign: 'center',
    },
    albumName: {
        display: 'inline',
        fontSize: '0.9rem',
    },
    albumArtists: {
        display: 'inline',
        fontSize: '0.7rem',
    },
    albumDetailsContainer: {
        width: '60%',
        color: '#f5eded',
        float: 'left',
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'left',
        marginBottom: '10px',
    },
    spotifyLinkButton: {
        float: 'right',
    },
    spotifyLink: {
        border: '1px solid gray',
        borderRadius: 4,
        padding: '0 1px 3px 1px',
    },
    rating: {
        backgroundColor: 'gray',
        borderRadius: 4,
    },
}));
