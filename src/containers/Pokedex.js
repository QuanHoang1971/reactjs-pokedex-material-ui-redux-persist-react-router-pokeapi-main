import { Box, CircularProgress, Grid, makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import { IMAGE_API_URL, POKEMON_API_URL } from "../config";

const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    textAlign: "center",
    padding: "70px 10px 10px 10px",
    backgroundColor: "#90caf9",
  },
}));

export default function Pokedex() {
  const classes = useStyles();
  // truy cập data bên ngoài hook
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    // limit 204 pokemon
    axios.get(POKEMON_API_URL + "?limit=204").then((response) => {
      // check http responses, trong phạm vi này thì success get data, store trong hook
      if (response.status >= 200 && response.status < 403) {
        const { results } = response.data;
        // ban đầu sẽ rỗng để khi có đc data sẽ push vào
        let newPokemonData = [];
        results.map((pokemon, index) => {
          index++;
          let pokemonObject = {
            id: index,
            url: IMAGE_API_URL + index + ".png",
            name: pokemon.name,
          };
          newPokemonData.push(pokemonObject);
        });
        setPokemonData(newPokemonData);
        // sau khi lấy đc data mới rồi sẽ tạo hook useState(null)
      }
    });
  }, []);
  return (
    <Box>
      {/* check có data ko thì mới map() */}
      {pokemonData ? (
        <Grid className={classes.pokedexContainer} container spacing={3}>
          {pokemonData.map((pokemon) => {
            return (
              <PokemonCard
                pokemon={pokemon}
                image={pokemon.url}
                key={pokemon.id}
              />
            );
          })}
        </Grid>
      ) : (
        <CircularProgress style={{ marginTop: 100 }} />
      )}
    </Box>
  );
}
{
}
/* props là pokemon và imagae */
