import React, { useState } from "react";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import users from "../data/users.json";

const Login = ( { isAuth, toggleAuth } ) => {
    const [ email, setEmail ] = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const navigate = useNavigate();

    function handleSubmit( e ) {
        e.preventDefault();

        users.map( (user) => {
            if ( email === user.email && password === user.password ) {
                toggleAuth( isAuth = true );
                navigate( "/articles" );
            }
        } );
    }

    console.log( isAuth );


    return (
        <>
            <main className="container">
                <h1>Login</h1>
                <form onSubmit={ handleSubmit } className="login-form">
                    <input
                        type="email"
                        name="email"
                        value={ email }
                        onChange={ e => setEmail( e.target.value ) }
                    />
                    <input
                        type="password"
                        name="password"
                        value={ password }
                        onChange={ e => setPassword( e.target.value ) }
                    />
                    <Button type="submit">
                        Login
                    </Button>
                </form>
            </main>
        </>
    );
};

export default Login;