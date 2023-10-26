import React, { useState } from 'react'
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

function PasswordInput({ register, error }) {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <>
            <label htmlFor="password" className='text-base font-semibold mb-2'>Contraseña:</label>
            <div className='flex items-center  border-violet rounded-md border pr-[18px] focus-within:ring-1 focus-within:ring-violet'>
                <input type={showPassword ? 'text' : 'password'} name="password" {...register("password")} id="password" placeholder='Ingrese su contraseña' className='p-3  w-full outline-none rounded-md ' />
                {showPassword ? <BsFillEyeFill className=' text-violet text-3xl cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : <BsFillEyeSlashFill className=' text-violet text-3xl cursor-pointer' onClick={() => setShowPassword(!showPassword)} />}
            </div>
            <span className='text-red-500 text-sm block'>{error}</span>
        </>

    )
}

export default PasswordInput