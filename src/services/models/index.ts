export interface Album {
    spotify_id: string;
    name: string;
    image_link: string;
    artists: Artist[] | null;
}

export interface Artist {
    id: number;
    name: string;
    albums: Album[] | null;
}

export interface AlbumFeatures {
    spotifyId: string;
    explicit: boolean;
    acousticness: number;
    danceability: number;
    energy: number;
    instrumentalness: number;
    liveness: number;
    loudness: number;
    speechiness: number;
    valence: number;
    tempo: number;
}
