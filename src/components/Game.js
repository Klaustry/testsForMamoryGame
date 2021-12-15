import React, {useEffect} from "react";
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Icons} from "../icons/icons";
import Header from "./Header";
import Card from "./Card"
import {setGameState, setFlippedCards, setShuffleIcons, setFlippedIcons,setMoves,setWon} from "../redux/actions";
import {connect} from "react-redux";

const useStyles = makeStyles({
    gameWrapper: {
        width: "100%",
        minHeight: "500px",
        background: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    gameContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "1200px",
    },
    gameTopBar: {
        width: "100%",
        height: "80px",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0px 1px 8px rgba(37, 104, 239, 0.4)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
    },
    gameBoard: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 150px)",
        gridAutoRows: "150px",
        gridGap: "10px",
    },

});


function Game(props) {
    const classes = useStyles();

    useEffect(() => {
        props.setShuffleIcons(Icons)
    }, [props.settings.gameState]);

    const handleClick = (icon, id) => {

        if (props.settings.flippedCards.length < 2) {
            const newFlippedCards = [...props.settings.flippedCards, id];
            props.setFlippedCards(newFlippedCards);
            const newFlippedIcons = [...props.settings.flippedIcons, icon];
            props.setFlippedIcons(newFlippedIcons);
            if (newFlippedIcons.length === 2) {
                checkCards(newFlippedIcons);
            }
        }
    };

    const checkCards = icons => {
        props.setMoves(props.settings.moves + 1);
        let newWon = [];
        setTimeout(() => {
            if (icons[0] === icons[1]) {
                newWon = [...props.settings.won, ...icons];
                props.setWon(newWon);
            }
            props.setFlippedCards([]);
            props.setFlippedIcons([]);
            if (newWon.length === props.settings.shuffledIcons.length) {
                props.setGameState("finished")
            }
        }, 500);

    };

    return (

        <Grid className={classes.gameWrapper}>
            <Grid className={classes.gameContainer}>
                <Header/>
                <Grid className={classes.gameBoard}>
                    {props.settings.shuffledIcons && props.settings.shuffledIcons.map((icon, index) => (
                        <Card
                            key={index}
                            id={index}
                            icon={icon}
                            flippedCards={props.settings.flippedCards}
                            hiddenCards={props.settings.won}
                            handleClick={handleClick}
                        />
                    ))}
                </Grid>

            </Grid>

        </Grid>
    );
}

const mapStateToProps = (store) => {
    return {
        settings:store,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setGameState: (gameState) => dispatch(setGameState(gameState)),
        setFlippedCards: (newFlippedCards) => dispatch(setFlippedCards(newFlippedCards)),
        setShuffleIcons: (icons) => dispatch(setShuffleIcons(icons)),
        setFlippedIcons: (icons) => dispatch(setFlippedIcons(icons)),
        setMoves: (moves) => dispatch(setMoves(moves)),
        setWon: (won) => dispatch(setWon(won)),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)



