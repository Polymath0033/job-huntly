import { Outlet } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import jobImage from "../../assets/job-image.png";
import peopleGraph from "../../assets/people-graph.png";
export default function AuthLayout() {
  return (
    <div className="flex w-full overflow-y-hidden">
      <div className="w-full pl-8 grow bg-[#F8F8FD] py-6 h-screen">
        <img src={logo} alt="Logo" className="h-9 mb-9 pl-40" />
        <div className="mt-10 w-full relative">
          <img
            src={peopleGraph}
            alt="People Graph"
            className="absolute left-0 top-0 "
          />
          <img
            src={jobImage}
            alt="Job"
            className=" w-[386px] right-5 absolute object-contain "
          />
        </div>
      </div>
      <div className="grow w-full px-28 py-8 flex justify-center items-center">
        <div className="min-w-[408px] flex gap-6 flex-col my-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
