import Header from "../../components/common/header/Header"
import Footer from "../../components/common/footer/Footer"

export default function UserLayout(props) {
  const { isAuthenticated } = props
  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <div className="px-4 py-5 mb-5 ">{props.children}</div>
      <Footer />
    </>
  )
}
