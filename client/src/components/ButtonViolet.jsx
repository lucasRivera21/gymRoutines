import React from 'react'

function ButtonViolet({ text }) {
    return (
        <button type="submit" className='font-semibold text-base bg-violet p-4 rounded-md text-white w-auto mx-auto hover:opacity-80'>{text}</button>
    )
}

export default ButtonViolet