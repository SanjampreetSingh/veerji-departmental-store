import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

// Layouts
import HomeRouter from "../../layouts/home/HomeRouter"
import AdminRouter from "../../layouts/admin/AdminRouter"
import LoginRouter from "../../layouts/login/LoginRouter"
import UserRouter from "../../layouts/user/UserRouter"

// user views
import Home from "../../views/home/Home"
import Search from "../../views/user/search/Search"
import MakePayments from "../../views/user/search/MakePayments"
import Login from "../../containers/login/Login"
import Logout from "../../containers/logout/Logout"
import Register from "../../containers/register/Register"
// admin view
import AdminDashboard from "../../containers/admin/dashboard/AdminDashboard"
import ListCustomer from "../../containers/admin/customer/list-customer/ListCustomer"
import RetrieveCustomer from "../../containers/admin/customer/retrieve-customer/RetrieveCustomer"
import ListLocality from "../../containers/admin/locality/list-locality/ListLocality"
import AddLocality from "../../containers/admin/locality/add-locality/AddLocality"
import EditLocality from "../../containers/admin/locality/edit-locality/EditLocality"
import ListSale from "../../containers/admin/sale/list-sale/ListSale"

export default function UIRouter() {
  return (
    <Router>
      <Switch>
        {/* Home Routes */}
        <HomeRouter exact path="/" component={Home} />
        {/* User Router */}
        <Route exact path="/user">
          <Redirect to="/user/search" />
        </Route>
        <UserRouter exact path="/user/search" component={Search} />
        <UserRouter exact path="/user/pay" component={MakePayments} />
        {/* Login Routes */}
        <LoginRouter
          exact
          path="/login"
          component={Login}
          heading="Please sign in"
        />
        <LoginRouter
          exact
          path="/register"
          component={Register}
          heading="Please sign up"
        />
        <Route exact path="/logout" component={Logout} />
        {/* Admin Routes */}
        <Route exact path="/admin">
          <Redirect to="/admin/dashboard" />
        </Route>
        <AdminRouter exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminRouter exact path="/admin/customer" component={ListCustomer} />
        <AdminRouter
          exact
          path="/admin/customer/details/:userId"
          component={RetrieveCustomer}
        />
        <AdminRouter exact path="/admin/locality" component={ListLocality} />
        <AdminRouter exact path="/admin/locality/add" component={AddLocality} />
        <AdminRouter
          exact
          path="/admin/locality/:id"
          component={EditLocality}
        />
        <AdminRouter exact path="/admin/sale" component={ListSale} />
        {/* Default Route */}
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  )
}
