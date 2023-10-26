import React, { useState } from 'react'
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
  email: yup.string().email("Correo inválido").required("Campo requerido"),
  password: yup.string().required("Campo requerido")

})

function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  //Data from form
  const onSubmit = data => console.log(data);


  return (
    <div className=' w-screen h-screen flex justify-center items-center'>

      <div className="max-w-xs  h-auto ">

        {/*TITLE */}
        <h1 className="text-[2.5rem] font-bold mb-20">
          Entra a tu Cuenta
        </h1>

        {/*FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className='grid mb-7'>

          {/*EMAIL INPUT */}
          <label htmlFor="email" className='text-base font-semibold mb-2'>Email:</label>
          <div className='mb-4 '>
            <input type="text" name="email" id="email" placeholder='Ingrese un email' {...register("email", { required: true })} className=' border-violet rounded-md border p-3 focus:outline-none focus:ring-1 focus:ring-violet w-full' />
            <span className='text-red-500 text-sm block'>{errors.email?.message}</span>
          </div>



          {/*PASSWORD INPUT */}
          <label htmlFor="password" className='text-base font-semibold mb-2'>Contraseña:</label>
          <div className='flex items-center  border-violet rounded-md border pr-[18px] focus-within:ring-1 focus-within:ring-violet'>
            <input type={showPassword ? 'text' : 'password'} name="password" {...register("password", { required: true })} id="password" placeholder='Ingrese su contraseña' className='p-3  w-full outline-none rounded-md ' />
            {showPassword ? <BsFillEyeFill className=' text-violet text-3xl cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : <BsFillEyeSlashFill className=' text-violet text-3xl cursor-pointer' onClick={() => setShowPassword(!showPassword)} />}
          </div>
          <span className='text-red-500 text-sm block'>{errors.password?.message}</span>

          {/*SEND BUTTON */}
          <button type="submit" className='font-semibold text-base bg-violet p-4 rounded-md text-white w-auto mx-auto hover:opacity-80 mt-7'>Entrar</button>
        </form>

        {/*FORGOT PASSWORD */}
        <a href="#" className="font-normal underline underline-offset-4  flex w-fit mx-auto">¿Olvidaste tu contraseña?</a>

        {/*REGISTER */}
        <div className='flex justify-center mt-4'>
          <p className="mr-1 font-normal">¿Eres nuevo por acá?</p><a className="font-normal underline underline-offset-4 cursor-pointer" onClick={() => navigate("/register")}>Regístrate</a>
        </div>
      </div>
    </div>


  )
}

export default Login