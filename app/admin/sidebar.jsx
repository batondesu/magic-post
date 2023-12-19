import React from "react";

import { useSideBar } from "@/store/useSidebar";

const Sidebar = () => {
  let { sideBar, setSideBar } = useSideBar();

  return (
    <div className="bg-gray-800 text-white h-screen w-1/5 flex flex-col">
      <div className="py-4 px-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>
      <nav className="flex-1">
        <ul className="my-4">
          <li
            onClick={() => setSideBar("user")}
            className="py-2 cursor-pointer"
          >
            <div className="text-gray-300 hover:text-white">
              Quản lý người dùng
            </div>
          </li>

          <li
            onClick={() => setSideBar("content")}
            className="py-2 cursor-pointer"
          >
            <div className="text-gray-300 hover:text-white">
              Quản lý nội dung
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
