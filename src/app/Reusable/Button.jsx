import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';

const Button = ({ text, onClick, className, type = 'button', disabled = false, iconColor = 'white' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group inline-flex items-center gap-2 px-4 py-2 rounded ${className}`}
      disabled={disabled}
    >
      {typeof text === 'string' ? (
        <>
          {text}
          <FaArrowRight className="transform translate-x-0 group-hover:translate-x-1 transition duration-200" color={iconColor} />
        </>
      ) : (
        text
      )}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  iconColor: PropTypes.string,
};

export default Button;
