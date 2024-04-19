import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Error = (params) => {

    const error = useRouteError()

    console.log(error.response.data.msg)
  return (
    <div className='min-h-screen flex items-center justify-center flex-col'>
        <h1 className='text-4xl font-serif font-bold'>{error.response.data.msg}</h1>
        <h2>Please <Link to='/login' className='text-xl py-4 inline-block font-semibold'>login</Link> to continue</h2>
    </div>
  )
}

export default Error