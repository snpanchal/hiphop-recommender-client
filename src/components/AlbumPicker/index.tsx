import React from 'react';
import AlbumCard from '../AlbumCard';

function AlbumPicker() {
    return (
        <div>
            <p>Album Recommendation</p>
            <AlbumCard
                albumSpotifyId='5pF05wJrbrIvqunE41vWP8'
                albumName='No Pressure'
                albumArtists='Logic'
                albumImageLink='https://i.scdn.co/image/ab67616d00001e021c76e29153f29cc1e1b2b434'
            />
        </div>
    )
}

export default AlbumPicker;