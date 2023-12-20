// Home
import PageHome from "./home/page"
import CreateOrder from "@/components/employee/create-order"
import Receipt from "./receipt/page"
import LocationAgent from "./location/agent/page"
import EmployeePort from "./employee/porter/page"
import OrderList from "@/components/location/order-list"
import DashBoard from "@/components/employee/dashboard"


// import User from "./user/page" 

export default function Home() {
  return (
    <>
      <LocationAgent  />
    </>
  )
}