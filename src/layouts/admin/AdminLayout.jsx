import Header from "../../components/admin/common/header/Header"
import Sidebar from "../../components/admin/common/sidebar/Sidebar"

export default function AdminLayout(props) {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="py-5 mb-5">
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              {props.children}
            </main>
          </div>
        </div>
      </div>
    </>
  )
}
