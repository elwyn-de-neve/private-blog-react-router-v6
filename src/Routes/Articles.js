import React from 'react';
import data from "../data/articles.json";
import { Link } from "react-router-dom";

const Articles = () => {
    return (
        <main className="container">
            <h1>Welkom op deze overzichtspagina</h1>
            <h2>Er zijn <span>{ data.length }</span> artikelen beschikbaar</h2>
            <ul>
                { data.map( ( article ) =>
                    ( <li key={ article.id }><Link to={ `/article/${ article.id - 1 }` } >{ article.title }</Link></li> )
                ) }
            </ul>
        </main>
    );
};

export default Articles;