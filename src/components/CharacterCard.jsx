import 'react';
import PropTypes from 'prop-types';

const CharacterCard = ({ name, image, species, house, gender, alternate_names, alive }) => {
  return (
    <article className="character-card">
      <img src={image} alt={name} width="100" />
      <h3>{name}</h3>
      <p>{species}</p>
      <p>{house}</p>
      <p>{gender}</p>
      <p>{alternate_names}</p>
      <p>{alive ? 'Vivo' : 'Muerto'}</p>
    </article>
  );
};

export default CharacterCard;

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  alternate_names: PropTypes.array.isRequired,
  alive: PropTypes.bool.isRequired,
};
