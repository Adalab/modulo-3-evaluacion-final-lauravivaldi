import {useState, useEffect} from 'react'
import getCharacter from '../services/api'
import FilterName from '../components/FilterName'
import FilterHouse from '../components/FilterHouse'
import CharacterList from '../components/CharacterList'
import ls from "../services/localStorage";



const HomePage = () => {

  const [name, setName] = useState('');
  const [house, setHouse] = useState('Todas');
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    
    getCharacter().then((data) => {
      let filteredData = data;
      if (house !== "Todas") {
        filteredData = filteredData.filter((item) => item.house === house);
            }
      if (name.trim() !== "") {
        filteredData = filteredData.filter((item) =>
          item.name.toLowerCase().includes(name.toLowerCase())
        );
      }
      setCharacters(filteredData);
      ls.set("characters", filteredData);
    });
  }, [name, house]);


  const updateName = (value) => {
    setName(value);
  };

  const updateHouse = (value) => {
    setHouse(value);
  };

 
 return (
  <>
    <section>
      <h3>Busca tu personaje de Harry Potter favorito: </h3>
      <FilterName name={name} updateName={updateName} />
      <FilterHouse house={house} updateHouse={updateHouse} />
    </section>

    <section>
    <h3>Resultados de la búsqueda:</h3>
    <CharacterList characters={characters}/>

</section>

  </>
);
};

export default HomePage;            
  