import { getMyRecentlyPlayedTracks, getMySongRate } from "../../api";

export async function getSongsToRate() {
    const recentlyPlayedSongs = (await getMyRecentlyPlayedTracks()).items;
    const ratePromises = [];
    recentlyPlayedSongs.forEach((obj) => {
        ratePromises.push(getMySongRate(obj.track.id));
    });
    return await Promise.all(ratePromises).then((result) => {
        return recentlyPlayedSongs.filter((song, index) => !result[index][0]);
    });
}

export async function getFriends() {
    // return friends getMyFriends();
}
