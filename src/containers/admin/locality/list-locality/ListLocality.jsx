import React, { useState, useEffect } from "react"

import ListLocalityComponent from "../../../../components/admin/locality/list-locality/ListLocalityComponent"
import { getAllLocality } from "../../../../services/services"

export default function ListLocality() {
  const [locality, setLocality] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = e => {
    getAllLocality()
      .then(res => {
        setLocality(res.data)
      })
      .catch(error => {
        const err = error
        return err
      })
  }
  return <ListLocalityComponent locality={locality} />
}
