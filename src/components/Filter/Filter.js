import React from 'react';
import './Filter.css';

//==чтобы достучаться до value и onChange, используем пропсы
const Filter = ({ value, onChange }) => (
  <label className="filter__label">
    <span className="filter__tittle">Filter by name</span>
    <input
      type="text"
      className="filter__input"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;
