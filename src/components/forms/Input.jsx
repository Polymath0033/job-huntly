import PropTypes from "prop-types";

export const Input = ({ type, placeholder, value, onChange, id, label }) => {
  return (
    <label className="flex flex-col gap-1" htmlFor={id}>
      <span className="block text-base font-semibold mb-1 text-neutrals-80 !leading-[160%]">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-3 flex border border-[#D6DDEB] bg-white rounded-md text-base font-normal
         placeholder:text-[#A8ADB7] text-neutrals-80 !leading-[160%] w-full focus:outline-none focus:border-primary"
        id={id}
        name={id}
      />
    </label>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
