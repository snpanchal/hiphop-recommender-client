import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import React, { useState } from 'react';

import AlbumsList from '../AlbumsList';
import useStyles from './styles';
import { GridType } from '../types';

function AlbumPicker() {
    const classes = useStyles();
    const [searchQuery, setSearchQuery] = useState('');
    const [gridType, setGridType] = useState<GridType>(GridType.allAlbums);

    return (
        <div>
            <p>Album Recommendation</p>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Show:</InputLabel>
                <Select
                    className={classes.select}
                    value={gridType}
                    onChange={(e) => setGridType(e.target.value as GridType)}
                >
                    <MenuItem value={GridType.allAlbums}>Albums</MenuItem>
                    <MenuItem value={GridType.recommendedAlbums}>
                        Recommendations
                    </MenuItem>
                    <MenuItem value={GridType.ratedAlbums}>Rated</MenuItem>
                </Select>
            </FormControl>
            <AlbumsList searchQuery={searchQuery} gridType={gridType} />
        </div>
    );
}

export default AlbumPicker;
