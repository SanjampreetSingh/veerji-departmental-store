export default function ConfimationBox(props) {
  let { btnTitle, btnClass, modalTitle, modalBody, modalMessage, modelAction } =
    props
  let triggerBtnClass = btnClass ? btnClass : "btn-primary"
  return (
    <>
      <button
        type="button"
        className={"btn " + triggerBtnClass}
        data-toggle="modal"
        data-target="#confirmBox"
      >
        {btnTitle}
      </button>

      <div
        className="modal fade"
        id="confirmBox"
        tabindex="-1"
        role="dialog"
        aria-labelledby="confirmationBox"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-6 shadow">
            <div className="modal-header border-bottom-0">
              <h5 className="modal-title">{modalTitle}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {modalBody ? (
              <div className="modal-body py-0">{modalMessage}</div>
            ) : null}
            <div className="modal-footer flex-column border-top-0">
              <button
                type="button"
                className="btn btn-lg btn-primary w-100 mx-0 mb-2"
                onClick={modelAction}
              >
                Confirm
              </button>
              <button
                type="button"
                className="btn btn-lg btn-light w-100 mx-0"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
