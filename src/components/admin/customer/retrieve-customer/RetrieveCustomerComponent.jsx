import CustomerDetailComponent from "./DetailCustomerComponent"
import EditCustomerComponent from "./EditCustomerComponent"
import RecurringProductsComponent from "./RecurringProductsComponent"

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
      <RecurringProductsComponent />
    </>
  )
}
