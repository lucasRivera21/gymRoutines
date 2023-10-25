import React from 'react'

function Login() {
  return (
    <div className="max-w-xs  mx-auto mt-20 ">
      <h1 className="text-[2.5rem] font-bold mb-20">
        Entra a tu Cuenta
      </h1>

      <form className='grid mb-7'>
        <label htmlFor="email" className='text-base font-semibold mb-2'>Email:</label>
        <input type="email" name="email" id="email" placeholder='Ingrese un email' className='mb-4 border-violet rounded-md border p-3 focus:outline-none focus:ring-1 focus:ring-violet' />

        <label htmlFor="password" className='text-base font-semibold mb-2'>Contraseña:</label>
        <input type="password" name="password" id="password" placeholder='Ingrese su contraseña' className=' border-violet rounded-md border mb-7 p-3   focus:outline-none focus:ring-1 focus:ring-violet' />

        <button type="submit" className='font-semibold text-base bg-violet p-4 rounded-md text-white w-auto mx-auto hover:opacity-80'>Entrar</button>
      </form>

      <a href="#" className="font-normal underline underline-offset-4  flex w-fit mx-auto">¿Olvidaste tu contraseña?</a>
      <div className='flex justify-center mt-4'>
        <p className="mr-1 font-normal">¿Eres nuevo por acá?</p><a href="" className="font-normal underline underline-offset-4">Regístrate</a>
      </div>
    </div>

  )
}

export default Login