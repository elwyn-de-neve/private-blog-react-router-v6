import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Articles from "./Routes/Articles";
import Article from "./Routes/Article";
import PageNotFound from "./Routes/PageNotFound";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoutes/PrivateRoutes";

function App() {

    const [ isAuthenticated, toggleIsAuthenticated ] = useState( false );

    return (
        <>
            {/* Dit kan later Layout component worden */ }
            <header>
                <Navbar isAuth={ isAuthenticated } toggleAuth={ toggleIsAuthenticated }/>
            </header>

            {/* Routing opzetten */ }
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/login"
                       element={ <Login isAuth={ isAuthenticated } toggleAuth={ toggleIsAuthenticated }/> }/>

                <Route element={ <PrivateRoute isAuth={ isAuthenticated }/> }>
                    <Route path="/articles" element={ <Articles/> } exact/>
                    <Route path="/article/:articleId" element={ <Article/> }/>
                </Route>
                <Route path="*" element={ <PageNotFound/> }/>
            </Routes>

            <footer>
                {/* Maak evt. een footer */ }
            </footer>
        </>
    );
}

export default App;
