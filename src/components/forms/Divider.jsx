import PropTypes from "prop-types";

export const Divider = ({ name }) => {
  return (
    <div
      className="relative before:contents-[''] before:bg-[#D6DDEB] 
    before:absolute before:w-full before:z-[1] before:h-[1px] before:top-1/2 before:-translate-y-1/2"
    >
      <span className="text-[#202430] relative z-[100] !bg-white text-center flex justify-center px-2 opacity-50 font-normal text-base !leading-[160%]">
        {name}
      </span>
    </div>
  );
};

Divider.propTypes = {
  name: PropTypes.string.isRequired,
};
