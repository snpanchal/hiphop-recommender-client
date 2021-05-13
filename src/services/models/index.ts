export interface Album {
    spotifyId: string;
    name: string;
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