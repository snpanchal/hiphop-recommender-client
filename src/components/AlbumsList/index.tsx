import { Grid } from '@material-ui/core';

import { RatedAlbums, RecommendedAlbums, AllAlbums } from './components';
import useStyles from './styles';
import { GridType } from '../types';

interface AlbumsListProps {
    searchQuery: string;
    gridType: GridType;
}

function AlbumsList({ searchQuery, gridType }: AlbumsListProps) {
    const classes = useStyles();

    return (
        <div className={classes.gridContainer}>
            <Grid
                container
                spacing={2}
                justify="center"
                className={classes.grid}
            >
                {gridType === GridType.ratedAlbums ? (
                    <RatedAlbums />
                ) : gridType === GridType.recommendedAlbums ? (
                    <RecommendedAlbums />
                ) : (
                    <AllAlbums searchQuery={searchQuery} />
                )}
            </Grid>
        </div>
    );
}

export default AlbumsList;
