import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    root: {
        maxWidth: 210,
        background: '#292626',
        textAlign: 'center'
    },
    albumName: {
        display: 'inline'
    },
    albumArtists: {
        display: 'inline',
        fontSize: 12
    },
    albumDetailsContainer: {
        color: '#f5eded',
        float: 'left',
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'left'
    },
    spotifyLinkButton: {
        float: 'right'
    },
    spotifyLink: {
        border: '1px solid gray',
        borderRadius: 4,
        padding: '0 1px 3px 1px'
    },
    rating: {
        margin: '10 auto',
        backgroundColor: 'gray',
        borderRadius: 4,
    }
}));