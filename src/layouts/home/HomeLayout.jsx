import Header from "../../components/common/header/Header"
import Footer from "../../components/common/footer/Footer"

export default function HomeLayout(props) {
  const { isAuthenticated, children } = props
  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <div className="px-4 py-5 mb-5 ">{children}</div>
      <Footer />
    </>
  )
}
