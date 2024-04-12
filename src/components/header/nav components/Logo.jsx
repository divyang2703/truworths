import React from 'react'
import {Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div>
      <h1 className='mt-4'>
        <Link to='/'>
        <span className='flex items-center font-body text-4xl'>TRUWORTHS</span>
        </Link>
      </h1>
    </div>
  )
}

export default Logo
