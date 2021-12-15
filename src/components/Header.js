import React from "react";
import { Grid } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    headerWrapper: {
        width: "50%",
        height: "80px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin:"40px auto 50px auto",
        fontSize: "35px",
        color: "#2568EF",
    }
});

function Header() {
    const classes = useStyles();
    return (
        <div className="App">
            <Grid className={classes.headerWrapper}>
                Memory game by maxAkkerman
            </Grid>

        </div>
    );
}

export default Header;
