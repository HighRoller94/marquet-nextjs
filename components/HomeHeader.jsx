import React from 'react'

const HomeHeader = ({ header, body }) => {
  return (
    <div className="text-center mt-5 mb-7 md:mb-8 md:mt-7 items center justify-center">
        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl capitalize">{header}</h1>
        <p className="max-w-md mx-auto mt-1 md:mt-2 text-gray-500 capitalize">{body}</p>
    </div>
  )
}

export default HomeHeader