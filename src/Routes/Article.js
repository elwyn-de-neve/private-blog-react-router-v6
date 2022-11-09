import React from 'react';
import { Link, useParams } from "react-router-dom";
import data from '../data/articles.json'

const Article = () => {
    const { articleId } = useParams()
    return (
        <main className="container">
            <h1>{ data[articleId].title }</h1>
            <h3>{ data[articleId].date }</h3>
            <p>
                { data[articleId].content }
            </p>
            <span>Terug naar <Link to="/">home</Link></span>
        </main>
    );
};

export default Article;