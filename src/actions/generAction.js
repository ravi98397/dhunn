export const loadGenres = (AllGenres) => {
    console.log('setting genre')
    return {
        type: 'SETALLGENRES',
        payload: AllGenres
    }
}


export const addGenre = (genreObj) => {
    console.log("Action received!!!")
    return {
        type: 'ADDGenres',
        data: genreObj
    }
}

export const updateGenre = (genreObj) => {
    console.log("update genre action received...")
    return {
        type: 'UPDATEGENRE',
        payload: genreObj
    }
}