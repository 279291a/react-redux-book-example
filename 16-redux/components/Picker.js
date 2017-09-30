import React, { PropTypes } from 'react';

export default function Picker({ value, handleChange, options }) {
  return (
    <div>
      <h3>{value}</h3>
      <select onChange={e => handleChange(e.target.value)} >
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  );
}

Picker.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
