import Header from "../../components/admin/common/header/Header"

export default function AdminLayout(props) {
  return (
    <>
      <Header />
      <div className="px-4 py-5 mb-5 ">{props.children}</div>
    </>
  )
}
