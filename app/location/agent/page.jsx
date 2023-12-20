'use client';

import React from "react";
import SideBar from "./sidebar";
import DashBoard from "../../../components/location/dashboard"
import EmployeeList from "../../../components/location/employee-list";
import OrderList from "../../../components/location/order-list";
import { useSideBar } from "@/store/useSidebar";

export default function LocationAgent() {
  let { sideBar, setSideBar } = useSideBar();

  return (
    <section>
      <SideBar />
      <div className="page-wrapper default-version">
        {sideBar == "dashboard" && <DashBoard />}
        {sideBar == "employee-list" && <EmployeeList />}
        {sideBar == "order-list" && <OrderList />}
      </div>
    </section>
  );
}