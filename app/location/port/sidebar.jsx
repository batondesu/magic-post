import React from "react";
import { useSideBar } from "@/store/useSidebar";
import Image from "next/image";

// CSS
import './asset/css/bootstrap.min.css'
import './asset/css/bootstrap-toggle.min.css'
import './asset/css/app.css'

import { FaTimes } from "react-icons/fa";
import { IoKeyOutline, IoHomeOutline } from "react-icons/io5";
import { LiaFaxSolid  } from "react-icons/lia";
import { LuUsers } from "react-icons/lu";

export default function SideBar() {
  let { sideBar, setSideBar } = useSideBar();
  return (
            <div className="sidebar bg--dark">
                <button className="res-sidebar-close-btn"><FaTimes /></button>
                <div className="sidebar__inner">
                    <div className="sidebar__logo">
                        <a href="/location" className="sidebar__main-logo">
                        </a>
                    </div>
                    <div className="sidebar__menu-wrapper" id="sidebar__menuWrapper">
                        <ul className="sidebar__menu">
                            <li className="sidebar-menu-item cursor-pointer" 
                                onClick={() => setSideBar("dashboard")}
                            >
                                <IoHomeOutline size={22} className="mr-2" />
                                <span className="menu-title">Dashboard</span>
                            </li>
                            
                            <li
                                className="sidebar-menu-item cursor-pointer"
                                onClick={() => setSideBar("employee-list")}
                            >
                                <LuUsers size={22} className="mr-2" />
                                <a href="location/employee-list" className="menu-title">Quản lý nhân viên</a>
                            </li>
            
                            <li
                                className="sidebar-menu-item cursor-pointer"
                                onClick={() => setSideBar("order-list")}
                            >
                                <LiaFaxSolid size={22} className="mr-2" />
                                <a href="location/order-list" className="menu-title">Thống kê hàng</a>
                            </li>            
                        </ul>
                    </div>
                </div>
            </div>
    )
}