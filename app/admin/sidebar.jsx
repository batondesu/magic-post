import React from "react";

import { useSideBar } from "@/store/useSidebar";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { GrSystem } from "react-icons/gr";

const Sidebar = () => {
  let { sideBar, setSideBar } = useSideBar();

  return (
    <div className="bg-blue-700 text-white h-screen w-1/6 flex flex-col">
      <div className="py-4 px-6 border-b border-white-700">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>
      <nav className="flex-1">
        <ul className="my-4">
          <div>
            <li
              onClick={() => setSideBar("system")}
              className="py-2 cursor-pointer"
            >
              <GrSystem size={23} className="absolute left-3" />
              <div className="text-gray-300 hover:text-white pl-10">
                Quản lý hệ thống
              </div>
            </li>
          </div>

          <div>
            <li
              onClick={() => setSideBar("account")}
              className="py-2 cursor-pointer"
            >
              <MdOutlineSupervisorAccount
                size={25}
                className="absolute left-3"
              />
              <div className="text-gray-300 hover:text-white pl-10">
                Quản lý tài khoản
              </div>
            </li>
          </div>
          <div>
            <li
              onClick={() => setSideBar("analytics")}
              className="py-2 cursor-pointer"
            >
              <IoAnalyticsSharp size={24} className="absolute left-3" />
              <div className="text-gray-300 hover:text-white pl-10">
                Báo cáo thống kê
              </div>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
