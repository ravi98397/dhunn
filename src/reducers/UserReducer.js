let initialState = {
    islogin: true,
    userdet: {}
}

//action needs to have songdetail with id that needs to be edited
const userReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'LOGGEDIN':
            console.log('trying to edit a song: ' );
            return {
                ...state,
                islogin: true,
                userdet: action.payload
            };
        
        case 'LOGMEOUT':
            console.log('GOING BACK TO NON EDITING' );
            return {
                islogin: false,
                userdet: {}
            };

        default:
            console.log("USER Reducer don't have any matching Action");
            return state;
        };
    }



export default userReducer;