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
        data-target="#exampleModal"
      >
        {btnTitle}
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {modalTitle}
              </h5>
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
              <div className="modal-body">{modalMessage}</div>
            ) : null}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={modelAction}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
