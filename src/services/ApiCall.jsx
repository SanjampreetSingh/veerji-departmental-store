import axios from "axios"
import * as actionTypes from "./actions"
import { API } from "../utils/constants"

const instance = axios.create({
  baseURL: API,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: localStorage.getItem("access_token")
      ? `Bearer ${localStorage.getItem("access_token")}`
      : null,
  },
})

export default async function ApiCall(action, url, data = {}) {
  let response = {}
  switch (action) {
    case actionTypes.GET:
      response = await instance.get(url)
      return response
    case actionTypes.POST:
      response = await instance.post(url, data)
      return response
    case actionTypes.PUT:
      response = await instance.put(url, data)
      return response
    case actionTypes.DELETE:
      response = await instance.delete(url)
      return response
    default:
      return response
  }
}
