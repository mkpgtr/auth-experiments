import React from 'react'
import { useLoaderData } from 'react-router-dom'



const Personal = () => {
    const data = useLoaderData()

    console.log(data)
  return (
    <div>Personal</div>
  )
}

export default Personal