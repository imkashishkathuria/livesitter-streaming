import React from 'react'

const NewButton = ({text}) => {
  return (
    <div className='bg-gray-300 px-4 w-[80%] h-25 flex justify-center items-center m-auto'>
      <button className='text-white text-md px-6 py-1 flex justify-center items-center gap-2 bg-green-700 rounded-full hover:bg-green-800 cursor-pointer'>
        <p className='text-2xl font-extrabold mb-1'>+</p>
        {text}
        </button>
    </div>
  )
}

export default NewButton
