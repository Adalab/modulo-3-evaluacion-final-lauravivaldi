import 'react';  
import PropTypes from 'prop-types';
import styles from "../styles/filterHouse.module.css";

const FilterHouse = ({ house, updateHouse }) => {

  const handleChangeSelect = (ev) => {
    updateHouse(ev.target.value);
  };
  return (
    <div className='input-select'>
      <label htmlFor='select'> Selecciona por casa 
        <select name='select' id='select'  value={house} onChange={handleChangeSelect} className={styles.filterInput} >
          <option value='Todas'>Todas</option>
          <option value='Gryffindor'>Gryffindor</option>
          <option value='Hufflepuff'>Hufflepuff</option>
          <option value='Ravenclaw'>Ravenclaw</option>
          <option value='Slytherin'>Slytherin</option>
        </select>
      </label>  
    </div>
    )
};

export default FilterHouse;

FilterHouse.propTypes = {
  house: PropTypes.string.isRequired,
  updateHouse: PropTypes.func.isRequired,
};