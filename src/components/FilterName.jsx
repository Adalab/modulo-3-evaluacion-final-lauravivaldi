import 'react';  
import PropTypes from 'prop-types';
import styles from "../styles/filterName.module.css";

const FilterName = ({ name, updateName }) => {
  const handleChangeName = (ev) => {
    updateName(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault(); // Evita que la página se recargue al hacer Enter
  };

  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Busca por personaje: </label>
          <input
          type="text"
          id="name"
          placeholder="h"
          value={name}
          onChange={handleChangeName}
          className={styles.filterInput}
          />
      </form> 
  );
};


export default FilterName;

FilterName.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
};



