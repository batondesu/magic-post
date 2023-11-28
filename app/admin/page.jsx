// pages/admin/dashboard.js

"use client";

import React from "react";
import Sidebar from "./sidebar";
import User from "../../components/admin/user";
import Content from "@/components/admin/content";
import { useSideBar } from "@/store/useSidebar";

export default function AdminDashboard() {
  let { sideBar, setSideBar } = useSideBar();

  return (
    <div className="flex">
      <Sidebar />
      <div>
        {sideBar == "user" && <User />}
        {sideBar == "content" && <Content />}
      </div>
    </div>
  );
}
