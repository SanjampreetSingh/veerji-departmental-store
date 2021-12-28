import React from "react"
import ReactDOM from "react-dom"
// Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css"
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css"
// custom css
import "./assets/css/index.css"
// App component
import App from "./components/App"

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.render(app, document.getElementById("root"))
