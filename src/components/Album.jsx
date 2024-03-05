import { useState, useEffect } from 'react';
import axios from "axios";
import '../index.css'

const Album = () => {
    const [album, setAlbum] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/albums")
            .then((res) => setAlbum(res.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <div className="list">
                {album && album.map((album) => (
                    <div className="album-list" key={album.id}>{album.title}</div>
                ))}
            </div>
        </div>
    );
};

export default Album;
