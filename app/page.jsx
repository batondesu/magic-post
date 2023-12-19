// Home
import PageHome from "./home/page"

import Receipt from "./receipt/page"

// employee - Porter(diem tap ket)
import Port from "./employee/porter/port" // don hang tu diem giao dich chuyen den
import Agent from "./employee/porter/agent" // don hang nhan ve tu diem tap ket khac
import CreateOrder from "./employee/porter/create-order"

// location Agent - giao dich
import EmployeeListA from "./location/agent/employee-list" 
import OrderListA from "./location/agent/order-list"

//Location Port - tap ket
import EmployeeListB from "./location/port/employee-list"
import OrderListB from "./location/port/order-list"

// import User from "./user/page"

export default function Home() {
  return (
    <>
      <OrderListB />
    </>
  )
}