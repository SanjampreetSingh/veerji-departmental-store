import axios from "axios"
import * as actionTypes from "./actions"

const token = ""
let headers = {}
const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
})

switch (process.env.NODE_ENV) {
  case "development":
    headers = {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    }

  default:
    headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
}

export default async function ApiCall(
  action,
  url,
  data = {},
  config = headers
) {
  let response = {}
  switch (action) {
    case actionTypes.GET:
      response = await instance.get(url, config)
      return response
    case actionTypes.POST:
      response = await instance.post(url, data, config)
      return response
    case actionTypes.CREATE:
      response = await instance.post(url, data, config)
      return response
    case actionTypes.READ:
      response = await instance.get(url, config)
      return response
    case actionTypes.UPDATE:
      response = await instance.put(url, data, config)
      return response
    case actionTypes.DELETE:
      response = await instance.delete(url, config)
      return response
    default:
      return response
  }
}
