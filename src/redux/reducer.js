import  {
    SET_GAME_STATE,
    ADD_CARD_STATE,
    SHUFFLE_ICONS,
    FLIP_ICON,
    SET_MOVES,
    SET_WON,
    RESET
        }  from './constants'

export const initialState = {
        gameState: "play",
        flippedCards: [],
        flippedIcons: [],
        won:[],
        moves:0,
        shuffledIcons:[]
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_GAME_STATE:
            return { ...state, gameState: action.payload }
        case ADD_CARD_STATE:
            return { ...state, flippedCards: action.payload }
        case SHUFFLE_ICONS:
            return { ...state, shuffledIcons: action.payload }
        case FLIP_ICON:
            return { ...state, flippedIcons: action.payload }
        case SET_MOVES:
            return { ...state, moves: action.payload }
        case SET_WON:
            return { ...state, won: action.payload }
        case RESET:
            return initialState
        default:
            return state
    }
}