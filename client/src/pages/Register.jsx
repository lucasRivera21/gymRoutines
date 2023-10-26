import React from 'react'




function Register() {



    return (
        <div>
            <h1 className="">Crea una Cuenta</h1>

            <form >

                {/*NAME INPUT*/}
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    name='name'
                />

                {/*WEIGHT INPUT*/}
                <label htmlFor="weight">Peso:</label>
                <div>
                    <input type="number" name='weight' id="weight" />
                    <select name="weight" id="">
                        <option value="kg" defaultChecked>Kg</option>
                        <option value="lb">Lb</option>
                    </select>
                </div>

                {/*GENDER INPUT*/}
                <ul>
                    <li>
                        <input type="checkbox" name="M" id="M" />
                        <label htmlFor="M">
                            <div>
                                <p>M</p>
                            </div>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" name="F" id="F" />
                        <label htmlFor="F">
                            <div>
                                <p>F</p>
                            </div>
                        </label>
                    </li>
                </ul>

                {/*EMAIL INPUT*/}
                <label htmlFor="email">Correo:</label>
                <input
                    type="text"
                    id="email"
                    name='email'
                />



                <button type='submit'>Registrarse</button>
            </form>



            <div className="">
                <p className="">¿Ya tienes una cuenta?</p><a href="" className="">Inicia Sesión</a>
            </div>
        </div>
    )
}

export default Register