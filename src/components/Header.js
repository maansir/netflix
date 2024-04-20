import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between w-screen bg-transparent shadow-lg text-white px-10 h-20 '>
        <img src='./assets/logo.png' alt='logo' className='w-150' />
        <button>Login</button>
    </div>
  )
}

export default Header