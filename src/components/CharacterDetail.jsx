import 'react'
import PropTypes from 'prop-types';
import styles from "../styles/characterDetail.module.css";

const CharacterDetail = ({  name, image, house, species, 
  gender = 'Desconocido',
  alternate_names = [],
  alive = true,}) => {

  return (
   <section className="character-detail"> 
      <img src={image || 'https://placehold.co/600x400'} alt={name} width="150" />
      <h3 className={styles.characterName}>{name}</h3>
      <p><strong>Casa:</strong> {house || 'Desconocida'}</p>
      <p><strong>Especie:</strong> {species || 'Desconocida'}</p>
      <p><strong>Género:</strong> {gender}</p>
      <p><strong>Nombres alternativos:</strong> {alternate_names.length > 0 ? alternate_names.join(', ') : 'No tiene'}</p>
      <p><strong>Estado:</strong> {alive ? 'Vivo' : 'Muerto'}</p>    
    </section>
  );
};

export default CharacterDetail;

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  house: PropTypes.string,
  species: PropTypes.string,
  gender: PropTypes.string,
  alive: PropTypes.bool,
  alternate_names: PropTypes.arrayOf(PropTypes.string),
};

