export default function Details() {
  return (
    <div className="row align-items-md-stretch">
      <div className="col-md-12">
        <div className="h-100 p-5 bg-light border rounded-3">
          <h2>User 1</h2>
          <p>
            Contact:{" "}
            <span
              className="d-inline-block"
              data-bs-toggle="popover"
              title={"Call on " + "+91-12345-12345"}
              data-bs-trigger="hover focus"
            >
              <a href="tel:+91-12345-12345" target="_blank">
                +91-12345-12345
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
                href="http://maps.google.com/?q=Some Address to visit"
                target="_blank"
              >
                Some Address to visit
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
