export default function DetailCustomerComponent(prop) {
  const { user, setEditButton } = prop
  return (
    <div className="row align-items-md-stretch">
      <div className="col">
        <div className="h-100 p-5 bg-light border rounded-3">
          <div className="row">
            <div className="col">
              <div className="py-1 text-center">
                <h2>{user?.name}</h2>
              </div>
            </div>
          </div>
          <div className="border-top mt-3" />
          <div className="row mt-3">
            <div className="col">
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
            </div>
            <div className="col">
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
            </div>
          </div>

          <div className="row">
            <div className="col">
              {" "}
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
            </div>
            <div className="col">
              <p>
                Pending Payment: ₹ <b>100</b>
              </p>
            </div>
          </div>
          <a
            href="#"
            className="btn btn-outline-primary"
            onClick={() => setEditButton(true)}
          >
            Edit
          </a>
        </div>
      </div>
    </div>
  )
}
