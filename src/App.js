import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
          return response.json();
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

