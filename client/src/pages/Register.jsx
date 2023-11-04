import React from 'react'
import EmailInput from '../components/EmailInput'
import PasswordInput from '../components/PasswordInput'
import ButtonViolet from '../components/ButtonViolet'
import TextInput from '../components/TextInput'
import WeightInput from '../components/WeightInput'
import GenderInput from '../components/GenderInput'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { useNavigate } from 'react-router-dom'

const schema = yup.object({
    email: yup.string().email("Correo inválido").required("Campo requerido"),
    password: yup.string().required("Campo requerido"),
    name: yup.string().required("Campo requerido"),
    weight: yup.string().required("Campo requerido"),
    gender: yup.string().required("Campo requerido")
})

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const navigate = useNavigate();

    const onSubmit = data => console.log(data);

    return (
        <div className='  h-screen w-screen flex items-center justify-center '>
            <div className='max-w-xs m-auto '>
                <h1 className="text-[2.5rem] font-bold mb-20">Crea una Cuenta</h1>

                <form className='grid grid-cols-2' onSubmit={handleSubmit(onSubmit)}>

                    {/*NAME INPUT*/}
                    <div className='col-span-full'>
                        <TextInput register={register} error={errors.name?.message} />
                    </div>

                    {/*WEIGHT INPUT*/}
                    <div className='mb-4 '>
                        <WeightInput register={register} error={errors.weight?.message} />
                    </div>

                    {/*GENDER INPUT*/}
                    <div>
                        <GenderInput register={register} error={errors.gender?.message} />
                    </div>

                    {/*EMAIL INPUT*/}
                    <div className='col-span-full mb-4'>
                        <EmailInput register={register} error={errors.email?.message} />
                    </div>

                    {/*PASSWORD INPUT*/}
                    <div className='col-span-full mb-4'>
                        <PasswordInput register={register} error={errors.password?.message} label={'Contraseña'} />
                    </div>

                    {/*TERMS AND CONDITIONS */}
                    <div className='col-span-full'>
                        <p className='text-sm font-normal text-gray-500'>Al registrarte aceptas los <a className='underline cursor-pointer'>Términos y Condiciones</a> de uso</p>
                    </div>

                    {/*SEND BUTTON */}
                    <div className='col-span-full flex py-5 '>
                        <ButtonViolet text={'Registrarse'} />
                    </div>

                </form>

                <div className="flex w-fit mx-auto">
                    <p className="">¿Ya tienes una cuenta?</p><a className="underline-offset-2 underline cursor-pointer" onClick={() => navigate("/login")}>Inicia Sesión</a>
                </div>
            </div>
        </div>
    )
}

export default Register