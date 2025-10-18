import 'react';  
import PropTypes from 'prop-types';
import styles from "../styles/filterName.module.css";

const FilterName = ({ name, updateName }) => {
  const handleChangeName = (ev) => {
    updateName(ev.target.value);
  };

  return (
    <div className="input-text">
      <label htmlFor="name">Busca por personaje: </label>
      <input
        type="text"
        id="name"
        placeholder="h"
        value={name}
        onChange={handleChangeName}
        className={styles.filterInput}
      />
    </div>
  );
};


export default FilterName;

FilterName.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
};



