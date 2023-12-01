// pages/admin/dashboard.js

"use client";

import React from "react";
import Sidebar from "./sidebar";
import Account from "@/components/admin/account";
import System from "@/components/admin/system";
import Analytics from "@/components/admin/analytics";
import { useSideBar } from "@/store/useSidebar";
import { SYSTEM_ENTRYPOINTS } from "next/dist/shared/lib/constants";

export default function AdminDashboard() {
  let { sideBar, setSideBar } = useSideBar();

  return (
    <div className="flex">
      <Sidebar />
      <div>
        {sideBar == "system" && <System />}
        {sideBar == "account" && <Account />}
        {sideBar == "analytics" && <Analytics />}
      </div>
    </div>
  );
}
