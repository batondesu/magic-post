'use client';

import React from "react";
import SideBar from "./sidebar";
import DashBoard from "../../../components/employee/dashboard"
import Agent from "../../../components/employee/agent";
import Port from "../../../components/employee/port";
import CreateOrder from "../../../components/employee/create-order"
import { useSideBar } from "@/store/useSidebar";

export default function EmployeePort() {
  let { sideBar, setSideBar } = useSideBar();

  return (
    <div>
      <SideBar />
      <div className="page-wrapper default-version">
        {sideBar == "dashboard" && <DashBoard />}
        {sideBar == "agent" && <Agent />}
        {sideBar == "port" && <Port />}
        {sideBar == "create-order" && <CreateOrder />}
      </div>
    </div>
  );
}