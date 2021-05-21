import { Button } from '@material-ui/core';
import React, { useState } from 'react';

import AlbumsList from '../AlbumsList';

function AlbumPicker() {
    const [searchQuery, setSearchQuery] = useState('');
    const [showRecommendations, setShowRecommendations] = useState(false);

    return (
        <div>
            <p>Album Recommendation</p>
            <Button
                variant="contained"
                color="primary"
                onClick={() => setShowRecommendations(!showRecommendations)}
            >
                {showRecommendations ? 'Show Albums' : 'Show Recommendations'}
            </Button>
            <AlbumsList
                searchQuery={searchQuery}
                showRecommendations={showRecommendations}
            />
        </div>
    );
}

export default AlbumPicker;
