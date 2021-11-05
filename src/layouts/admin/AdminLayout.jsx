import Header from "../../components/admin/common/header/Header"
import Sidebar from "../../components/admin/common/sidebar/Sidebar"

export default function AdminLayout(props) {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="px-4 py-5 mb-5 ">
            <Sidebar />
            {props.children}
          </div>
        </div>
      </div>
    </>
  )
}
