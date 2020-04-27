import { getMyRecentlyPlayedTracks } from "../../api";

export async function getSongsToRate() {
    const recentlyPlayedSongs = await getMyRecentlyPlayedTracks();
    return recentlyPlayedSongs;
    // TODO: filter out already rated songs
    // return Promise.all(
    //     recentlyPlayedSongs.map(async (song) => await isSongRated(song.title))
    // ).then((result) => {
    //     console.log(result);
    //     return recentlyPlayedSongs.filter((song, index) => result[index]);
    // });
}

export async function getFriends() {
    // return friends getMyFriends();
}
