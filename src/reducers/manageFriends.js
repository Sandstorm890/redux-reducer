export function manageFriends(state = {
    friends: [],
}, action){

    switch (action.type) {
        case "ADD-FRIEND":
            return ({
                ...state,
                friends: [...state.friends, action.friend]
            })

        case "REMOVE_FRIEND":
            const indexRemove = state.friends.findIndex(friend => friend.id === action.id)
            return ({
                ...state,
                friends: [...state.friends.slice(0, indexRemove), ...state.friends.slice(indexRemove + 1)]
            })

        default:
            return state
    }
}


