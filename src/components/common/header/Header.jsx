import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"
import CartIcon from "../../../assets/icons/CartIcon"

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand className="d-lg-none">
            <CartIcon />
          </Navbar.Brand>
          <Navbar.Brand className="d-none d-md-block">
            Veerji Departmental Store
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  )
}
