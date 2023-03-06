import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

const Section = ({ title, children }) => {
  return (
    <div className="section">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
