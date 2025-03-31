import React from 'react'

const Header = () => {
  return (
    <div className='bg-red-500 flex items-center justify-between p-6 px-8 text-white'>
      <h1 className='text-2xl font-semibold'>Programs Repo</h1>
      <button className="border border-white rounded px-8 py-2 hover:bg-red-600 transition">
        Login
      </button>
    </div>
  )
}

export default Header
