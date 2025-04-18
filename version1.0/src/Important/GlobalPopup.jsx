import React , {useContext} from 'react'
import {ProgramContext} from "../Store/StoreContext"
import Input from '../Components/Input';
const GlobalPopup = () => {
  const {popupContent} = useContext(ProgramContext)


  return (
    <div className='blurred-overlay'>
      <div className="fixed">
        {popupContent}
      </div>
    </div>
  )
}

export default GlobalPopup