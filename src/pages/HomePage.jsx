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
        <header className="header">
          <img src="public/logo.png" alt="Logo Harry Potter" className="logo"   style={{ width: "250px", height: "auto" }}/>
        </header>

        <section>
          <FilterName name={name} updateName={updateName} />
          <FilterHouse house={house} updateHouse={updateHouse} />
        </section>

        <section>
          <CharacterList characters={characters}/>
        </section>

      </>
);
};

export default HomePage;            
  