import React from 'react'

const Botton = (props) => {
  return (
    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition duration-300">
          <h1>{props.name}</h1>
        </button>
  )
}

export default Botton