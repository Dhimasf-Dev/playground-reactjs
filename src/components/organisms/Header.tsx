import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-center gap-20 bg-[#66D9EF] text-white p-4'>
        <Link to="/user">
            <div>User</div>
        </Link>
        <Link to="/register">
            <div>Register</div>
        </Link>
    </div>
  )
}

export default Header