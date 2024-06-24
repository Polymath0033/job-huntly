import PropTypes from "prop-types";

export const AppButton = ({ onClick, name, type }) => {
  return (
    <button
      type={type}
      className="px-6 py-3 bg-primary 
      text-white font-bold rounded-md text-base !leading-[160%] focus:outline-none flex justify-center items-center gap-2"
      onClick={onClick}
    >
      {name}
    </button>
  );
};
AppButton.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
