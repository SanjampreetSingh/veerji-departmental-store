import CustomerDetailComponent from "./DetailCustomerComponent"
import EditCustomerComponent from "./EditCustomerComponent"

export default function RetrieveCustomerComponent(props) {
  const { user, editButton, setEditButton } = props
  return (
    <>
      {!editButton ? (
        <CustomerDetailComponent user={user} setEditButton={setEditButton} />
      ) : (
        <EditCustomerComponent setEditButton={setEditButton} />
      )}

      <div className="border-top mt-3" />
      <h3>Recurring Product</h3>
    </>
  )
}
