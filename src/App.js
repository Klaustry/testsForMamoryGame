import './App.css';
import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Game from "./components/Game";
import {connect} from 'react-redux'
import {resetGame} from './redux/actions'

const useStyles = makeStyles({
    headerWrapper: {
        background: "orange",
        height: "200px",
        fontSize: "45px",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    gameResetBtn: {
        color: "#2568ef",
        outline: "none",
        fontSize: "20px",
        width: "200px",
        height: "50px",
        marginTop: "50px",
        borderRadius: "10px",
        border: "2px solid #2568EF",
        background: "white",
    }
});

function GameState(props) {
    const classes = useStyles();
    switch (props.settings.gameState) {
        case "play":
            return <Game/>;
        case "finished":
            return <>
                <Game/>
                <button
                    onClick={() => props.resetGame()}
                    className={classes.gameResetBtn}
                >
                    Reset
                </button>
            </>
        default:
            return <Game/>;
    }
}

function App(props) {

    return (
        <div onClick={() => (console.log(props, "props"))} className="App">
            {GameState(props)}
        </div>
    );
}

const mapStateToProps = (store) => {
    return {
       settings: store,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetGame: () => dispatch(resetGame()), // [1]
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

