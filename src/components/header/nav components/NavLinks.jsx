import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = () => {
  return (
    <div>
      <ul className='flex ml-64 mt-1 items-center font-span'>
        <Link to='/products'>
        <li className='mx-9'>Men</li>
        </Link>

        <Link to='/products'>
        <li className='mx-9'>Women</li>
        </Link>
        <Link to='/products'>
        <li className='mx-9'>Kids</li>
        </Link>
        <Link to='/products'>
        <li className='mx-9'>Beauty</li>
        </Link>
        <Link to='/products'>
        <li className='mx-9'>Homeware</li>
        </Link>
        <Link to='/products'>
        <li className='mx-9'>Trends</li>
        </Link>
        <Link to='/products'>
        <li className='mx-9'>Brands</li>
        </Link>
        <Link to='/products'>
        <li className='mx-9'>Sale</li>
        </Link>
      </ul>
    </div>
  )
}

export default NavLinks
