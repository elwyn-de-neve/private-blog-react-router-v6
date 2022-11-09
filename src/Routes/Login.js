import React from 'react';
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import user from '../data/users.json'

const Login = ( { email, password, isAuth, toggleAuth } ) => {

    let navigate = useNavigate();


    function handleSubmit( e ) {
        e.preventDefault()

        if ( user.email === email && user.password === password ) {
            console.log( 'You are logged in' )
            toggleAuth( isAuth => !isAuth )
            console.log(isAuth)
        }
        console.log( "Form submitted" )

    }

    return (
        <>
            <main className="container">
                <h1>Login</h1>
                <form onSubmit={ handleSubmit } className="login-form">
                    <label htmlFor="email-login">Email
                        <input id="email-login"
                               name="email"
                               type="email"
                               value={ isAuth }
                               onChange={ event => toggleAuth(event.target.value) }/>
                    </label>
                    <label htmlFor="password-login">Password
                        <input id="password-login"
                               name="password"
                               type="password"
                               value=""
                               onChange={ event => event.target.value }/>
                    </label>
                    <Button type="submit">
                        Login
                    </Button>
                </form>
            </main>
        </>
    );
};

export default Login;