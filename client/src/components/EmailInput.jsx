import React from 'react'

function EmailInput({ register, error }) {
    return (
        <>
            <label htmlFor="email" className='text-base font-semibold mb-2'>Email:</label>
            <div className='mb-4'>
                <input type="text" name="email" id="email" placeholder='Ingrese un email' {...register("email")} className=' border-violet rounded-md border p-3 focus:outline-none focus:ring-1 focus:ring-violet w-full' />
                <span className='text-red-500 text-sm block'>{error}</span>
            </div>
        </>

    )
}

export default EmailInput