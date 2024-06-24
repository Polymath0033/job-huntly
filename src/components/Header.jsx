import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/Logo.svg";
export const Header = () => {
  const activeClass = ({ isActive }) =>
    isActive
      ? "text-primary font-medium text-base !leading-[160%] pb-3 border-b-2 border-primary my-auto"
      : "font-medium text-base !leading-[160%] text-neutrals-80 ";

  const path = useLocation();

  return (
    <header
      className={`flex justify-between w-full bg-white gap-2 px-28 items-center py-5 fixed top-0 ${
        path.pathname === "/" ? "!bg-[#F8F8FD]" : ""
      }`}
    >
      <div className="flex gap-6 items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          <img src={logo} alt="" />
        </Link>
        <div className="flex gap-2 items-center h-full">
          <NavLink
            className={({ isActive }) => activeClass({ isActive })}
            to={"/find-job"}
          >
            Find Jobs
          </NavLink>
          <NavLink
            to={"/browser-companies"}
            className={({ isActive }) => activeClass({ isActive })}
          >
            Browse companies
          </NavLink>
        </div>
      </div>
      <div className="flex gap-3 h-full">
        <NavLink
          to={"/login"}
          className={
            "px-6 py-3 flex justify-center items-center text-base font-bold text-primary"
          }
        >
          Login
        </NavLink>
        <div className="w-[2px] bg-[#D6DDEB] "></div>
        <NavLink
          to={"/sign-up"}
          className={
            "px-6 py-3 flex justify-center items-center text-base font-bold text-white bg-primary rounded-md"
          }
        >
          Sign up
        </NavLink>
      </div>
    </header>
  );
};
