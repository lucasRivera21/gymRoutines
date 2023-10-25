import React, { useState } from 'react'
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";


function Login() {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className=' w-screen h-screen flex justify-center items-center'>
      <div className="max-w-xs  h-auto ">
        <h1 className="text-[2.5rem] font-bold mb-20">
          Entra a tu Cuenta
        </h1>

        <form className='grid mb-7'>
          <label htmlFor="email" className='text-base font-semibold mb-2'>Email:</label>
          <input type="email" name="email" id="email" placeholder='Ingrese un email' className='mb-4 border-violet rounded-md border p-3 focus:outline-none focus:ring-1 focus:ring-violet' />

          <label htmlFor="password" className='text-base font-semibold mb-2'>Contraseña:</label>
          <div className='flex items-center mb-7 border-violet rounded-md border pr-[18px] focus-within:ring-1 focus-within:ring-violet'>
            <input type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder='Ingrese su contraseña' className='p-3  w-full outline-none rounded-md ' />
            {showPassword ? <BsFillEyeFill className=' text-violet text-3xl cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : <BsFillEyeSlashFill className=' text-violet text-3xl cursor-pointer' onClick={() => setShowPassword(!showPassword)} />}

          </div>
          <button type="submit" className='font-semibold text-base bg-violet p-4 rounded-md text-white w-auto mx-auto hover:opacity-80'>Entrar</button>
        </form>

        <a href="#" className="font-normal underline underline-offset-4  flex w-fit mx-auto">¿Olvidaste tu contraseña?</a>
        <div className='flex justify-center mt-4'>
          <p className="mr-1 font-normal">¿Eres nuevo por acá?</p><a href="" className="font-normal underline underline-offset-4">Regístrate</a>
        </div>
      </div>
    </div>


  )
}

export default Login