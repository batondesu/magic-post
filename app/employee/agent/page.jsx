'use client';

import React from "react";
import SideBar from "./sidebar";
import DashBoard from "../../../components/employee/dashboard"
import Sending from "../../../components/employee/sending";
import Reciving from "../../../components/employee/reciving";
import CreateOrder from "../../../components/employee/create-order"
import Record from "@/components/employee/record";
import { useSideBar } from "@/store/useSidebar";

export default function EmployeeAgent() {
  let { sideBar, setSideBar } = useSideBar();

  return (
    <section>
      <SideBar />
      <div className="page-wrapper default-version">
        {sideBar == "dashboard" && <DashBoard />}
        {sideBar == "sending" && <Sending />}
        {sideBar == "reciving" && <Reciving />}
        {sideBar == "create-order" && <CreateOrder />}
        {sideBar == "record" && <Record />}
      </div>
    </section>
  );
}