// import React from 'react';
// import PropTypes from 'prop-types';
// import { FaArrowRight } from 'react-icons/fa';

// const Button = ({ text, onClick, className, type = 'button', disabled = false, iconColor = 'white' }) => {
//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       className={` items-center py-3 px-8 rounded font-bold ${className}`}
//       disabled={disabled}
//     >
//       {text}
//     </button>
//   );
// };

// Button.propTypes = {
//   text: PropTypes.string.isRequired,
//   onClick: PropTypes.func,
//   className: PropTypes.string,
//   type: PropTypes.string,
//   disabled: PropTypes.bool,
//   iconColor: PropTypes.string,
// };

// export default Button;
import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';

const Button = ({
  text,
  onClick,
  className,
  type = 'button',
  disabled = false,
  iconColor = 'white',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative inline-block py-3 px-8 rounded font-bold text-lg overflow-hidden transition duration-500 ${className}`}
      disabled={disabled}
    >
      {/* Neon Border Effect */}
      <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-[#5D65FF] animate-animate1"></span>
      <span className="absolute top-[-100%] right-0 w-[3px]  h-full bg-gradient-to-b from-transparent to-[#5D65FF] animate-animate2"></span>
      <span className="absolute bottom-0 right-0 w-full h-[3px]  bg-gradient-to-l from-transparent to-[#5D65FF] animate-animate3"></span>
      <span className="absolute bottom-[-100%] left-0 w-[3px]  h-full bg-gradient-to-t from-transparent to-[#5D65FF] animate-animate4"></span>

      {/* Button Text */}
      <span>{text}</span>

      {/* Icon (Arrow) */}
      <FaArrowRight color={iconColor} className="inline-block ml-3" />
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  iconColor: PropTypes.string,
};

export default Button;
