import ApiCall from "./ApiCall"
import * as action from "./actions"

export const userPendingPayment = (locality, houseNumber, phoneNumber) =>
    ApiCall(
        action.GET,
        `users/payment?locality=${locality}&hno=${houseNumber}&phn=${phoneNumber}`
    )

// Token API
export const getToken = data => ApiCall(action.POST, "token/", data)

// Locality API
export const getAllLocality = () => ApiCall(action.GET, "locality/")
export const getAllLocalities = () => ApiCall(action.GET, "list/locality/")
export const getLocality = id => ApiCall(action.GET, `locality/${id}/`)
export const addLocality = data => ApiCall(action.POST, "locality/", data)
export const deleteLocality = id => ApiCall(action.DELETE, `locality/${id}/`)
export const editLocality = (id, data) =>
    ApiCall(action.PUT, `locality/${id}/`, data)

// Category API
export const getAllCategory = () => ApiCall(action.GET, "category/")
export const getCategory = id => ApiCall(action.GET, `category/${id}/`)
export const addCategory = data => ApiCall(action.POST, "category/", data)
export const deleteCategory = id => ApiCall(action.DELETE, `category/${id}/`)

// Product API
export const getAllProduct = () => ApiCall(action.GET, "product/")
export const getProduct = id => ApiCall(action.GET, `product/${id}/`)
export const addProduct = data => ApiCall(action.POST, "product/", data)
export const deleteProduct = id => ApiCall(action.DELETE, `product/${id}/`)

// User API
export const getAllUser = () => ApiCall(action.GET, "user/")
export const getUser = id => ApiCall(action.GET, `user/${id}/`)
export const addUser = data => ApiCall(action.POST, "user/", data)
export const deleteUser = id => ApiCall(action.DELETE, `user/${id}/`)

// Sale API
export const getAllSale = () => ApiCall(action.GET, "sale/")
export const getSale = id => ApiCall(action.GET, `sale/${id}/`)
export const addSale = data => ApiCall(action.POST, "sale/", data)
export const deleteSale = id => ApiCall(action.DELETE, `sale/${id}/`)

// RecurringProduct API
export const getAllRecurringProduct = () =>
    ApiCall(action.GET, "recurring_product/")
export const getRecurringProduct = id =>
    ApiCall(action.GET, `recurring_product/${id}/`)
export const addRecurringProduct = data =>
    ApiCall(action.POST, "recurring_product/", data)
export const deleteRecurringProduct = id =>
    ApiCall(action.DELETE, `recurring_product/${id}/`)