import {useState, useEffect} from 'react'
import getCharacter from '../services/api'
import FilterName from '../components/FilterName'
import FilterHouse from '../components/FilterHouse'



const HomePage = () => {

  const [name, setName] = useState('');
  const [select, setSelect] = useState('Todas');
  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    
    getCharacter().then((data) => {
      let filteredData = data;
      if (select !== "Todas") {
        filteredData = filteredData.filter((item) => item.house === select);
            }
      if (name.trim() !== "") {
        filteredData = filteredData.filter((item) =>
          item.name.toLowerCase().includes(name.toLowerCase())
        );
      }
      setCharacters(filteredData);
    });
  }, [name, select]);


  const updateName = (value) => {
    setName(value);
  };

  const updateHouse = (value) => {
    setSelect(value);
  };

 
  return (
          <> 
          <section>
            <h3>Busca tu personaje de Harry Potter favorito: </h3>
            <FilterName name={name} updateName={updateName} />
         {/*   <div className='input-text'>
              <label htmlFor='name'>Busca por personaje: </label>
              <input type='text' name='name' id='name' placeholder='h' value={name} onChange={handleChangeName}/>  
          </div> */}

            <FilterHouse house={select} updateHouse={updateHouse} />
         {/*  <div className='input-select'>
            <label htmlFor='select'> Selecciona por casa 
              <select name='select' id='select' onChange={handleChangeSelect} value={select}>
                <option value='Todas'>Todas</option>
                <option value='Gryffindor'>Gryffindor</option>
                <option value='Hufflepuff'>Hufflepuff</option>
                <option value='Ravenclaw'>Ravenclaw</option>
                <option value='Slytherin'>Slytherin</option>
              </select>
            </label>  
            </div> */}
          </section>


      {/*Renderizando las tarjetas */}
      <section>
        <h3>Resultados de la búsqueda:</h3>
        {characters.map((item, index) => (
          <article key={index}>{/* //luego puede ser que necesite un id */}
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} width="100" />
            <p>{item.species}</p>
          </article>
        ))}
      </section>
    </>
  );
}

export default HomePage
         
            
            
        
    
    

