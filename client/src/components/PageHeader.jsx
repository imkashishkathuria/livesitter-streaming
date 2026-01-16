import React from 'react'

const PageHeader = ({text}) => {
  return (
    <div className='bg-gray-300 px-4 h-25 flex justify-center items-center text-3xl text-gray-500'>
      <h1>{text}</h1>
      
    </div>
  )
}

export default PageHeader
