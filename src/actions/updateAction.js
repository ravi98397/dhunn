const URL = "http://localhost:3001/songs";


export const setEdit = (song, currcomp) => {
    return { 
        type: 'EDITINGSONGDETAIL',
        payload: {
            song: song,
            editcomp: currcomp
        }
    }
} 

export const closeEdit = () => {
    return { 
        type: 'CLOSEDITOPTION',
    }
} 