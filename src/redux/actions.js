import shuffle from "lodash.shuffle";

export function setGameState(gameState) {
    return {
        type: 'SET_GAME_STATE',
        payload: gameState,
    }
}

export function setFlippedCards(newFlippedCards) {
    return {
        type: 'ADD_CARD_STATE',
        payload: newFlippedCards,
    }
}

export function setShuffleIcons(icons) {
let newIcons = shuffle(icons)
    return {
        type: 'SHUFFLE_ICONS',
        payload: newIcons,
    }
}

export function setFlippedIcons(icons) {
    return {
        type: 'FLIP_ICON',
        payload: icons,
    }
}

export function setMoves(moves) {
    return {
        type: 'SET_MOVES',
        payload: moves,
    }
}

export function setWon(won) {
    return {
        type: 'SET_WON',
        payload: won,
    }
}

export function resetGame(){
    return {
        type: 'RESET',
    }
}


