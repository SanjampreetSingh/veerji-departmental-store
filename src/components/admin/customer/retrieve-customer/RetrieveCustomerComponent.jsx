export default function RetrieveCustomerComponent(props) {
  const { user } = props
  return (
    <div className="row align-items-md-stretch">
      <div className="col-md-12">
        <div className="h-100 p-5 bg-light border rounded-3">
          <h2>{user?.name}</h2>
          <p>
            Contact:{" "}
            <span
              className="d-inline-block"
              data-bs-toggle="popover"
              title={"Call on +91-" + user?.phone}
              data-bs-trigger="hover focus"
            >
              <a href={"tel:+91-" + user?.phone} target="_blank">
                {"+91-" + user?.phone}
              </a>
            </span>
          </p>
          <p>
            Email:{" "}
            <span
              className="d-inline-block"
              data-bs-toggle="popover"
              title={"Email here" + user?.email}
              data-bs-trigger="hover focus"
            >
              <a href={"mailto:" + user?.email} target="_blank">
                {user?.email}
              </a>
            </span>
          </p>
          <p>
            Address:{" "}
            <span
              className="d-inline-block"
              data-bs-toggle="popover"
              title="Find on google maps"
              data-bs-trigger="hover focus"
            >
              <a
                href={
                  "http://maps.google.com/?q=" +
                  user?.house_number +
                  " " +
                  user?.locality_name
                }
                target="_blank"
              >
                {user?.house_number + " " + user?.locality_name}
              </a>
            </span>
          </p>
          <p>
            Pending Payment: ₹ <b>100</b>
          </p>
        </div>
      </div>
    </div>
  )
}
