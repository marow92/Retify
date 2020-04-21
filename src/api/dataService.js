import axios from "axios";
const serverUrl = "http://localhost:8000";

export async function getAlbumTracks(id) {
    axios(`${serverUrl}/api/spotify/album/${id}/tracks`, {
        method: "GET",
        withCredentials: true,
    }).then((response) => {
        console.log(response.data);
    });
}
