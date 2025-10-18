import 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from "../styles/characterCard.module.css";

const CharacterCard = ({ character }) => {
  const { name, image, species } = character;
  const imageSrc = image && image.trim() !== '' ? image : 'https://placehold.co/600x400';

  return (
    <article className={styles.character} >
      <img src={imageSrc} alt={name}   style={{ maxWidth: "180px", height: "auto" }}/>
      <h3 className={styles.characterName}>{name}</h3>
      <p>{species}</p>    
      <Link to={`/character/${character.id}`}>Ver detalles</Link>
    </article>
  );
};

export default CharacterCard;

CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,    
    image: PropTypes.string,
    species: PropTypes.string.isRequired,     
  }).isRequired,
  };












