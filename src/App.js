import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Articles from "./Routes/Articles";
import Article from "./Routes/Article";
import PageNotFound from "./Routes/PageNotFound";
import { useState } from "react";

function App() {

    const [ isAuthenticated, toggleIsAuthenticated ] = useState( false );

    return (
        <>
            {/* Dit kan later Layout component worden */ }
            <header>
                <Navbar/>
            </header>

            {/* Routing opzetten */ }
            <Routes>
                <Route path="/"
                       element={ <Home/> }/>
                <Route path="/login"
                       element={ <Login
                           isAuth={ isAuthenticated }
                           toggleAuth={ toggleIsAuthenticated }/> }/>
                <Route>
                    <Route path="/articles"
                           element={ <Articles/> }/>
                    <Route path="/article/:articleId"
                           element={ <Article/> }/>
                </Route>
                <Route path="*"
                       element={ <PageNotFound/> }/>
            </Routes>

            <footer>
                {/* Maak evt. een footer */ }
            </footer>
        </>
    );
}

export default App;
