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

export const getAllLocality = () => ApiCall(actionTypes.GET, "locality/")