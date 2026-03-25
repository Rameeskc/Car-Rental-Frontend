import React from 'react'

const Heading = (props) => {
  return (
    <div className='w-full pt-10 lg:pt-20 flex items-center justify-center px-4'>
      <h1 className='text-2xl sm:text-3xl lg:text-3xl font-semibold text-center'>
        {props.name}
      </h1>
    </div>
  )
}

export default Heading