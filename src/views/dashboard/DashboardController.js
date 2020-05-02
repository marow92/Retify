import { getMyRecentlyPlayedTracks, getMySongRate } from "../../api";

export async function getSongsToRate() {
    const recentlyPlayedSongs = (await getMyRecentlyPlayedTracks()).items;
    // return recentlyPlayedSongs;
    // TODO: filter out already rated songs
    console.log(recentlyPlayedSongs);
    const ratePromises = [];
    recentlyPlayedSongs.forEach((obj) => {
        ratePromises.push(getMySongRate(obj.track.id));
    });
    return await Promise.all(ratePromises).then((result) => {
        console.log(result);
        return recentlyPlayedSongs.filter((song, index) => !result[index]);
    });
}

export async function getFriends() {
    // return friends getMyFriends();
}
