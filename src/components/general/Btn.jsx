import React from 'react'

const Btn = ({handleClick, text}) => {
  return (
    <button onClick={handleClick} className='bg-black text-sm border-[1px] border-gray-300 font-bold text-white px-4 py-1 rounded' >{text}</button>
  )
}

export default Btn