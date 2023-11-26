import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-1/5 flex flex-col">
      <div className="py-4 px-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>
      <nav className="flex-1">
        <ul className="my-4">
          <li className="py-2">
            <Link legacyBehavior href="">
              <a className="text-gray-300 hover:text-white">
                Quản lý người dùng
              </a>
            </Link>
          </li>
          <li className="py-2">
            <Link legacyBehavior href="">
              <a className="text-gray-300 hover:text-white">Quản lý nội dung</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
