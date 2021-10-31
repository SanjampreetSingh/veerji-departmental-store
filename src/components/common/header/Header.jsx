import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"
import ShopIcon from "../../../assets/icons/ShopIcon"

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <ShopIcon />
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  )
}
