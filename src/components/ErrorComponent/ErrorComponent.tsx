import React from 'react'

interface IErrorProps {
    title: String
}

const ErrorComponent: React.FC<IErrorProps> = ({ title }) => {
  return (
    <div>
        <h1 className='text-center text-2xl text-red-700 font-semibold'>{title}</h1>
    </div>
  )
}

export default ErrorComponent