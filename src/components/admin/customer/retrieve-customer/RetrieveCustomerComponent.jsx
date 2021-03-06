import CustomerDetailComponent from "./DetailCustomerComponent"
import EditCustomerComponent from "./EditCustomerComponent"
import RecurringProductComponent from "./RecurringProductComponent"

export default function RetrieveCustomerComponent(props) {
  const {
    user,
    product,
    recurringProduct,
    locality,
    editButton,
    setEditButton,
    handleRecurringArray,
    handleRecurringObj,
    handleSubmit,
    handleUserFormChange,
  } = props
  return (
    <>
      {!editButton ? (
        <CustomerDetailComponent user={user} setEditButton={setEditButton} />
      ) : (
        <EditCustomerComponent
          user={user}
          locality={locality}
          setEditButton={setEditButton}
          handleUserFormChange={handleUserFormChange}
          handleSubmit={handleSubmit}
        />
      )}

      <div className="border-top my-3" />
      <RecurringProductComponent
        product={product}
        recurringProduct={recurringProduct}
        handleRecurringArray={handleRecurringArray}
        handleRecurringObj={handleRecurringObj}
        handleSubmit={handleSubmit}
      />
    </>
  )
}
