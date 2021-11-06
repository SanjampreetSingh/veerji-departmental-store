import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

// Layouts
import HomeRouter from "../../layouts/home/HomeRouter"
import AdminRouter from "../../layouts/admin/AdminRouter"

// views
import Home from "../../views/home/Home"
import Search from "../../views/user/search/Search"
import MakePayments from "../../views/user/search/MakePayments"
import Login from "../../views/login/Login"
import AdminHome from "../../views/admin/admin-home/AdminHome"
import AdminCustomer from "../../views/admin/admin-customer/AdminCustomer"

export default function UIRouter() {
  return (
    <Router>
      <Switch>
        <HomeRouter exact path="/" component={Home} />
        <HomeRouter exact path="/user/search" component={Search} />
        <HomeRouter exact path="/user/pay" component={MakePayments} />
        <HomeRouter exact path="/admin/login" component={Login} />
        <AdminRouter exact path="/admin/home" component={AdminHome} />
        <AdminRouter exact path="/admin/customer" component={AdminCustomer} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  )
}
