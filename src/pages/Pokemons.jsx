import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pokemons = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      setData(response.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <h1>Pokemons</h1>
      <div className="main-div">
        {data.map((pokemon, index) => {
          const url = pokemon.url.split("/")[6];
          return (
            <Link to={`/pokemon/${pokemon.name}`} key={index}>
              <div className="link-card">
                <div>{pokemon.name}</div>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${url}.png`}
                  alt={pokemon.name}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Pokemons;
