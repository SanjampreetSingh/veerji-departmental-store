import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

// Layouts
import HomeRouter from "../../layouts/home/HomeRouter"
import AdminLayout from "../../layouts/admin/AdminLayout"

// views
import Home from "../../views/home/Home"
import Search from "../../views/user/search/Search"
import MakePayments from "../../views/user/search/MakePayments"
import Login from "../../views/login/Login"

export default function UIRouter() {
  return (
    <Router>
      <Switch>
        <HomeRouter exact path="/" component={Home} />
        <HomeRouter exact path="/user/search" component={Search} />
        <HomeRouter exact path="/user/pay" component={MakePayments} />
        <HomeRouter exact path="/admin/login" component={Login} />
        <AdminLayout exact path="/admin/home" component={<h1>hi</h1>} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  )
}
