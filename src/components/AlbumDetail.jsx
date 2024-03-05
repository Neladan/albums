import {useEffect, useState} from "react";
import axios from "axios";

const AlbumDetail = () => {
    const [albumDetail, setAlbumDetail] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/albums")
            .then((res) => setAlbumDetail(res.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (
        <div>
            <h1>Album Detail</h1>
            <ul>
                {albumDetail.map((album) => (
                    <li key={album.id}>{album.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default AlbumDetail;