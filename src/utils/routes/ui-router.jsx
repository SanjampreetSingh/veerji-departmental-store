import { BrowserRouter as Router, Switch } from "react-router-dom"

// Layouts
import HomeRouter from "../../layouts/home/HomeRouter"

// views
import Home from "../../views/home/Home"
import Search from "../../views/user/search/Search"
import MakePayments from "../../views/user/search/MakePayments"

export default function UIRouter() {
  return (
    <Router>
      <Switch>
        <HomeRouter exact path="/" component={Home} />
        <HomeRouter exact path="/user/search" component={Search} />
        <HomeRouter exact path="/user/pay" component={MakePayments} />
      </Switch>
    </Router>
  )
}
