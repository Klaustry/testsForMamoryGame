import React from "react";
import styled, { css } from "styled-components";
import {makeStyles} from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    cardWrapper:{
        width: "100%",
        height: "100%",
        margin: "0px",
        position: "relative",
    },
})

const Card = ({ icon, id, flippedCards, hiddenCards, handleClick }) => {
    const clickable = !flippedCards.includes(id) && !hiddenCards.includes(icon);
    const classes = useStyles();

    return (
        <>
            <Grid className={classes.cardWrapper} onClick={clickable ? () => handleClick(icon, id) : null}>
                <CardSide front flipped={flippedCards.includes(id)}>
                    <img src={icon} alt="icon" />
                </CardSide>
                <CardSide
                    back
                    won={hiddenCards.includes(icon)}
                    flipped={flippedCards.includes(id)}
                />
            </Grid>
        </>
    );
};

export default Card;

const CardSide = styled.div`
  position: absolute;
  cursor: ${({ flipped }) => (flipped ? "default" : "pointer")};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  transition: transform 0.6s cubic-bezier(0.21, 1.39, 0.49, 1.1),
    background-color 0.6s ease;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  box-shadow: 0px 1px 8px rgba(37, 104, 239, 0.4);
  ${({ front }) =>
    front &&
    css`
      background-color: white;
      border: 2px solid #2568EF;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: ${({ flipped }) =>
        flipped ? "rotateY(0deg)" : "rotateY(180deg)"};
      img {
        height: 80%;
        object-fit: contain;
      }
    `}
  ${({ back }) =>
    back && 
    css`
      background-color: ${({ won }) =>
        won ? "white" : "#2568EF"};
      transform: ${({ flipped }) =>
        flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
    `};
`;

