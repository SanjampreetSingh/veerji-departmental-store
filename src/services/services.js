import ApiCall from "./ApiCall"
import * as actionTypes from "./actions"

export const userPendingPayment = (locality, houseNumber, phoneNumber) =>
    ApiCall(
        actionTypes.GET,
        "users/payment?locality=" +
        locality +
        "&hno=" +
        houseNumber +
        "&phn=" +
        phoneNumber
    )

// Locality API 
export const getAllLocality = () => ApiCall(actionTypes.GET, "locality/")
export const addLocality = data => ApiCall(actionTypes.POST, "locality/", data)