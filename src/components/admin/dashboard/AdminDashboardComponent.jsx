export default function AdminDashboardComponent(props) {
  const { handleAddRecurringSale } = props
  return (
    <>
      <h1>Welcome to admin panel</h1>
      <a
        className="btn btn-primary btn-sm "
        role="button"
        onClick={handleAddRecurringSale}
      >
        Add Recurring Sale
      </a>
    </>
  )
}
