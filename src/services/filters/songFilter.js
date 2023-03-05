//this code filters code onthe give properties
/*
{
    "album": "Save YoLipa",
    "song": "Save Your Tears",
    "duration": 306,
    "singer": [
        10001
    ],
    "release_date": "2/2/1998",
    "genre": 100009,
    "plays": 740,
    "id": 0
}

{
        "ArtistId": 10001,
        "ArtistName": "Dua Lipa",
        "SongWork": [
            0
        ]
}

{
        "id": 100001,
        "GenreName": "Party"
}
genrearr = []
artist = []
songs = []
*/

// giving it ability to read state and send us the required data
export const Top20Songs = (AllSongs) => {
    let ans = AllSongs.sort(byDate);
    return ans.slice(0, 21);
}

export const NewRelease = (AllSongs) => {
    let ans = AllSongs.sort(byLikes);
    return ans.slice(0,20);
}

function byDate(a,b){
    return a.release_date-b.release_date;
}

function byLikes(a,b){
    return a.plays - b.plays;
}