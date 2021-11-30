import ApiCall from "./ApiCall"
import * as action from "./actions"

export const userPendingPayment = (locality, houseNumber, phoneNumber) =>
    ApiCall(
        action.GET,
        `users/payment?locality=${locality}&hno=${houseNumber}&phn=${phoneNumber}`
    )

// Locality API
export const getAllLocality = () => ApiCall(action.GET, "locality/")
export const getLocality = id => ApiCall(action.GET, `locality/${id}/`)
export const addLocality = data => ApiCall(action.POST, "locality/", data)
export const deleteLocality = id => ApiCall(action.DELETE, `locality/${id}/`)