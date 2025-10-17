import 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';


const CharacterList = ({ characters }) => {
  if (characters.length === 0) { //el .length, es para el array. 
    return <p>No se encontraron personajes.</p>;
  }

  return (
   <section className="character-list">
      {characters.map((character, index) => (
        <CharacterCard key={`${character.name}-${index}`} character={character} />))}
    </section>
  );
};

export default CharacterList;

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};
