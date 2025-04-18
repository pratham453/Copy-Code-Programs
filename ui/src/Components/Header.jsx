import React, { useContext } from 'react'
import { ProgramContext } from '../Store/Program_Store'

const Header = () => {
  const {login , setLogin} = useContext(ProgramContext)

  return (
    <div className='bg-red-500 flex items-center justify-between p-6 px-8 text-white'>
      <h1 className='text-2xl font-semibold'>Programs Repo</h1>
      <button className="border border-white rounded px-8 py-2 hover:bg-red-600 transition" onClick={() => setLogin(!login)}>
        {login ? 'Logout' : 'Login'}
      </button>
    </div>
  )
}

export default Header
