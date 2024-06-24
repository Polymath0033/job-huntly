import { Header } from "../../components/Header";
// import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
export const HomeLayout = () => {
  return (
    <div>
      <Header />
      <div className="relative top-[88px]">
        <Outlet />
      </div>
    </div>
  );
};

// HomeLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };
