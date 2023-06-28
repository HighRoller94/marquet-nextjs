import React from 'react'

const HomeHeader = ({ header, body }) => {
  return (
    <div className="text-center mb-8 mt-7 items center justify-center">
        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl capitalize">{header}</h1>
        <p className="max-w-md mx-auto mt-2 text-gray-500 capitalize">{body}</p>
    </div>
  )
}

export default HomeHeader