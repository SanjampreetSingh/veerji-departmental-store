import CustomerDetailComponent from "./DetailCustomerComponent"
import EditCustomerComponent from "./EditCustomerComponent"
import RecurringProductComponent from "./RecurringProductComponent"

export default function RetrieveCustomerComponent(props) {
  const { user, product, editButton, setEditButton } = props
  return (
    <>
      {!editButton ? (
        <CustomerDetailComponent user={user} setEditButton={setEditButton} />
      ) : (
        <EditCustomerComponent setEditButton={setEditButton} />
      )}

      <div className="border-top my-3" />
      <RecurringProductComponent product={product} />
    </>
  )
}
