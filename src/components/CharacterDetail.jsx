import 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ name, image, house, species, gender, actor, alive }) => {
  return (
    <section className="character-detail">
      <img src={image} alt={name} width="150" />
      <h2>{name}</h2>
      <p><strong>Casa:</strong> {house}</p>
      <p><strong>Especie:</strong> {species}</p>
      <p><strong>Género:</strong> {gender}</p>
      <p><strong>Actor:</strong> {actor}</p>
      <p><strong>Estado:</strong> {alive ? 'Vivo' : 'Muerto'}</p>
    </section>
  );
};

export default CharacterDetail;

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  actor: PropTypes.string.isRequired,
  alive: PropTypes.bool.isRequired,
};
