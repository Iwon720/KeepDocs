const SET_DOC = "SET_DOC"

const defaultState = {
    currentDoc: {},
    notNull: false,
}

export default function docReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_DOC:
            return {
                ...state,
                currentDoc: action.payload,
                notNull: true
            }
        default:
            return state
    }
}


export const setDoc = doc => ({ type: SET_DOC, payload: doc })
