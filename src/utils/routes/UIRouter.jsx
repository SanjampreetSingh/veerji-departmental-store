import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

// Layouts
import HomeRouter from "../../layouts/home/HomeRouter"
import AdminRouter from "../../layouts/admin/AdminRouter"

// user views
import Home from "../../views/home/Home"
import Search from "../../views/user/search/Search"
import MakePayments from "../../views/user/search/MakePayments"
import Login from "../../views/login/Login"
import Register from "../../views/register/Register"
// admin view
import AdminHome from "../../views/admin/admin-home/AdminHome"
import AdminCustomer from "../../views/admin/admin-customer/AdminCustomer"
import CustomerAdd from "../../views/admin/customer/add/CustomerAdd"
import CustomerDetails from "../../views/admin/customer/details/CustomerDetails"
import AddLocality from "../../containers/admin/locality/add-locality/AddLocality"
import ListLocality from "../../containers/admin/locality/list-locality/ListLocality"
import EditLocality from "../../containers/admin/locality/edit-locality/EditLocality"

export default function UIRouter() {
  return (
    <Router>
      <Switch>
        {/* Home Routes */}
        <HomeRouter exact path="/" component={Home} />
        <HomeRouter exact path="/user/search" component={Search} />
        <HomeRouter exact path="/user/pay" component={MakePayments} />
        <HomeRouter exact path="/login" component={Login} />
        <HomeRouter exact path="/register" component={Register} />
        {/* Admin Routes */}
        <AdminRouter exact path="/admin" component={AdminHome} />
        <AdminRouter exact path="/admin/home" component={AdminHome} />
        <AdminRouter exact path="/admin/customer" component={AdminCustomer} />
        <AdminRouter exact path="/admin/customer/add" component={CustomerAdd} />
        <AdminRouter
          exact
          path="/admin/customer/details"
          component={CustomerDetails}
        />
        <AdminRouter exact path="/admin/locality" component={ListLocality} />
        <AdminRouter exact path="/admin/locality/add" component={AddLocality} />
        <AdminRouter
          exact
          path="/admin/locality/:id"
          component={EditLocality}
        />
        {/* Default Route */}
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  )
}
