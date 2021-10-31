import Header from "../../components/common/header/Header"
import Footer from "../../components/common/footer/Footer"

export default function HomeLayout(props) {
  return (
    <>
      <Header />
      <div className="px-4 py-5 mb-5 ">{props.children}</div>
      <Footer />
    </>
  )
}
