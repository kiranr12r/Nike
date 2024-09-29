import React from 'react'

const Button = ({label,iconURL}) => {
    return (
        <button className='flex justify-center gap-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red '>
            {label}
            {/* Click Me */}
            <img 
            src= {iconURL}
            alt="Arrow Right Icon" 
            className='ml-2 rounded-full w-5 h-5'
            />
        </button>
    )
}

export default Button
