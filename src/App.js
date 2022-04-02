import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
          return response.data;
      }).then(response => {
          setPokemonList(response.results);
      }).catch(error=>{
          console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Fetch Pokemon:</h1>
      {pokemonList.map((pokemonDictionary, index) => {
        return (<p key={index}>{pokemonDictionary.name}</p>);
      })}
    </div>
  );
}

export default App;

