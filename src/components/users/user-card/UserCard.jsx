export default function UserCard(props) {
  return (
    <div className="list-group">
      <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
        <img
          src="https://github.com/twbs.png"
          alt="twbs"
          width="32"
          height="32"
          className="rounded-circle flex-shrink-0"
        />
        <div className="d-flex gap-2 w-100 justify-content-between">
          <div>
            <h6 className="mb-0">Customer Name</h6>
            <p className="mb-0 opacity-75">
              Some placeholder content in a paragraph.
            </p>
          </div>
        </div>
      </div>
      <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
        <img
          src="https://github.com/twbs.png"
          alt="twbs"
          width="32"
          height="32"
          className="rounded-circle flex-shrink-0"
        />
        <div className="d-flex gap-2 w-100 justify-content-between">
          <div>
            <h6 className="mb-0">Phone number</h6>
            <p className="mb-0 opacity-75">
              Some placeholder content in a paragraph.
            </p>
          </div>
        </div>
      </div>
      <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
        <img
          src="https://github.com/twbs.png"
          alt="twbs"
          width="32"
          height="32"
          className="rounded-circle flex-shrink-0"
        />
        <div className="d-flex gap-2 w-100 justify-content-between">
          <div>
            <h6 className="mb-0">Address</h6>
            <p className="mb-0 opacity-75">
              Some placeholder content in a paragraph.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
