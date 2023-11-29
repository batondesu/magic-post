// Home
import PageHome from "./home/page"

import Receipt from "./receipt/page"

// employee 
import Port from "./employee/receiver/port"
import Agent from "./employee/receiver/agent"
import CreateOrder from "./employee/receiver/create-order"

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
      <OrderListA />
    </>
  )
}