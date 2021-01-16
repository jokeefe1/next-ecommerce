import React, {useState} from 'react';
import axios from 'axios';

export default function StaticSide(props) {
  console.log(props)

  return props.pokemon.map((poke) => (
    <div key={poke.name}>
      <h1>{poke.name}</h1>
      <div>
        <img src={poke.imgUrl} />
      </div>
      <hr />
    </div>
  ));
}

export const getStaticProps = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const response = await axios.get(url);
  const data = response.data.results;

  const promises = data.map((r) => {
    return axios.get(r.url);
  });

  const responses = await Promise.all(promises);

  const pokeData = responses.map((r) => {
    return {
      name: r.data.name,
      imgUrl: r.data.sprites.front_default
    };
  });
  return {
    props: {
      pokemon: pokeData
    }
  };
};