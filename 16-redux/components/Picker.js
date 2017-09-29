import React, { PropTypes } from 'react';

export default function Picker({ value, handleChange }) {
  return (
    <div>
      <h3>{value}</h3>
      <select onChange={() => handleChange()}>
        <option value="reactjs">reactJs</option>
        <option value="frontend">frontend</option>
      </select>
    </div>
  );
}

Picker.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
