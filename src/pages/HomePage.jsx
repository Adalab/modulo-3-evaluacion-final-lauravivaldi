import {useState, useEffect} from 'react'
import getCharacter from '../services/api'
import FilterName from '../components/FilterName'
import FilterHouse from '../components/FilterHouse'
import CharacterList from '../components/CharacterList'

import '../styles/App.scss'

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


            {/*Renderizando las tarjetas */}
          <section>
            <h3>Resultados de la búsqueda:</h3>
            <section className="character-list">
              <CharacterList characters={characters} />
              {/* {characters.map((item, index) => (
                <article key={index}> 
                  <h3>{item.name}</h3>
                  <img src={item.image} alt={item.name} width="100" />
                  <p>{item.species}</p>
                </article>
              ))}  */}
          </section>
        
          </section>
          </>
  )
}   


export default HomePage;

        
    
  