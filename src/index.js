import React from "react"
import ReactDOM from "react-dom"
// Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css"
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
