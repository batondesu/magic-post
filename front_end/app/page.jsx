// Home
import PageHome from "./home/page"
import CreateOrder from "@/components/employee/create-order"
import Receipt from "./receipt/page"
import LocationAgent from "./location/agent/page"
import LocationPort from "./location/port/page"
import EmployeePort from "./employee/porter/page"
import EmployeeAgent from "./employee/agent/page"
import OrderList from "@/components/location/agent/order-list"
import DashBoard from "@/components/employee/dashboard"


// import User from "./user/page" 

export default function Home() {
  return (
    <>
      <EmployeePort />
    </>
  )
}