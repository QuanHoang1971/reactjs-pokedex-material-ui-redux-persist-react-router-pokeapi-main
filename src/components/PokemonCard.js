import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

// công thức makeStyles((theme) => ({})
const useStyles = makeStyles((theme) => ({
  card: {
    cursor: "pointer",
    backgroundColor: "#f1f8e9",
    color: "black",
    "&:hover": {
      backgroundColor: "rgb(90, 90 ,90)",
    },
  },
  cardMedia: {
    margin: "auto",
    width: 130,
    height: 130,
  },
  cardContent: {
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
  },
}));

export default function PokemonCard(props) {
  const classes = useStyles();
  const { pokemon, image } = props;
  const { id, name } = pokemon;
  return (
    // mỗi item phải có unique key id
    <Grid item xs={12} md={2} lg={2} sm={4} key={id}>
      {/* link to pokemon details */}
      <Link to={"/pokemon/" + id} className={classes.link}>
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia} image={image}></CardMedia>
          <CardContent className={classes.cardContent}>
            <Typography variant="h4">{name}</Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}
