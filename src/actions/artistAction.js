export const loadArtists = (AllArtists) => {
    return {
        type: 'SETALLARTISTS',
        payload: AllArtists
    }
}


export const addArtist = (artistObj) => {
    console.log("Action received!!!")
    return {
        type: 'ADDArtists',
        data: artistObj
    }
}
