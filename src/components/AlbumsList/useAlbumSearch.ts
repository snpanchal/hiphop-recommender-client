import { useEffect, useState } from 'react';
import { getAllAlbums } from '../../services/api';
import { Album } from '../../services/models';

export default function useAlbumSearch(pageNum: number, searchQuery: string) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [albums, setAlbums] = useState<Album[]>([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => setAlbums([]), []);

    useEffect(() => {
        setLoading(true);
        getAllAlbums(pageNum, searchQuery)
            .then((res) => {
                setAlbums((prevAlbums) => [...prevAlbums, ...res]);
                setHasMore(res.length > 0);
                setLoading(false);
            })
            .catch((e) => setError(true));
    }, [pageNum, searchQuery]);

    return { loading, error, albums, hasMore };
}
