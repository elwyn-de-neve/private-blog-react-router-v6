import React from 'react';

const Button = ( { children, type, className, handleSubmit } ) => {
    return (
        <button type={ type } className={ className } onSubmit={ handleSubmit }>
            { children }
        </button>
    );
};

export default Button;