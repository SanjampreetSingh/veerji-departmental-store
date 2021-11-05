export default function ResponsiveMap() {
  return (
    <div className="container mt-5">
      <div className="border-top my-2" />
      <h2 className="text-center my-1">Reach us</h2>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3424.3144524795516!2d75.8036958!3d30.8778632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8146052e6131%3A0xfd2081c026ecda8b!2sVeerji%20Departmental%20Store!5e0!3m2!1sen!2sin!4v1636117186185!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="embed-responsive-item"
        ></iframe>
      </div>
    </div>
  )
}
