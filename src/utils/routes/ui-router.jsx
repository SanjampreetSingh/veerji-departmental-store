import { BrowserRouter as Router, Switch } from "react-router-dom"

// Layouts
import HomeRouter from "../../layouts/home/home-router"

// views
import Home from "../../views/home/Home"
import Bills from "../../views/user/bills/Bills"
import MakePayments from "../../views/user/bills/MakePayments"

export default function UIRouter() {
  return (
    <Router>
      <Switch>
        <HomeRouter exact path="/" component={Home} />
        <HomeRouter exact path="/user/bills" component={Bills} />
        <HomeRouter exact path="/user/pay" component={MakePayments} />
      </Switch>
    </Router>
  )
}
