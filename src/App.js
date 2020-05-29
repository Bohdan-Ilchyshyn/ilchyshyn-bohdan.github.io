import React from 'react';
import './App.css';
// import NavBar from "./components/NavBar/navbar";
import AuthService from "./services/auth.service"
import Login from "./components/Login/Login"
import {Route, Switch, BrowserRouter, Link} from "react-router-dom";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            currentUser: undefined
        }
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user
            });
        }
    }

    logout () {
        AuthService.logout();
    }

    render() {
        const {currentUser} = this.state;
        return (

            <BrowserRouter>
                <div>
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                        <div className="navbar-brand logo">
                            <Link to="/">
                                Music Service
                            </Link>
                        </div>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler"
                                aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <div className="collapse navbar-collapse custom-link" id="navbarToggler">
                            <ul className="nav navbar-nav navbar-center">
                                <li className="nav-item text-center">
                                    <div className="nav-link text-center">
                                        <Link to="/">
                                            Main
                                        </Link>
                                    </div>
                                </li>
                                <li className="nav-item text-center">
                                    {/*<a className="nav-link text-center" href="./playlists.html">Library</a>*/}
                                    <div className="nav-link text-center">
                                        <Link to="/playlist">Library</Link>
                                    </div>
                                </li>
                            </ul>

                            {/*<li className="nav-item text-center">*/}
                            {/*    <div className="nav-link text-center">*/}
                            {/*        <Link to="/login">*/}
                            {/*            SingIn*/}
                            {/*        </Link>*/}
                            {/*    </div>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item text-center">*/}
                            {/*    /!*<a className="nav-link text-center" href="./playlists.html">Library</a>*!/*/}
                            {/*    <div className="nav-link text-center">*/}
                            {/*        <Link to="/registration">SingUp</Link>*/}
                            {/*    </div>*/}
                            {/*</li>*/}
                            {currentUser ? (
                                <ul className="nav navbar-nav ml-auto">
                                    <li className="nav-item text-center">
                                        <div className="nav-link text-center">
                                            <Link to="/login">
                                                {currentUser}
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="nav-item text-center">
                                        {/*<a className="nav-link text-center" href="./playlists.html">Library</a>*/}
                                        <div className="nav-link text-center">
                                            <a onClick={this.logout}>Logout</a>
                                        </div>
                                    </li>
                                </ul>
                            ):(
                                <ul className="nav navbar-nav ml-auto">
                                    <li className="nav-item text-center">
                                        <div className="nav-link text-center">
                                            <Link to="/login">
                                                SingIn
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="nav-item text-center">
                                        {/*<a className="nav-link text-center" href="./playlists.html">Library</a>*/}
                                        <div className="nav-link text-center">
                                            <Link to="/registration">SingUp</Link>
                                        </div>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </nav>
                    <div className="container-xl">
                        <div className="row">
                            <Switch>
                                <Route exact path="/login" component={Login}/>
                                <Route exact path={["/", "/home"]} component={Home}/>
                            </Switch>
                        </div>
                    </div>

                </div>
                {/*<footer className="footer">*/}
                {/*    <div className="container">*/}
                {/*        <div className="row justify-content-center ">*/}
                {/*            <p className="footer-des">© Copyright 2020 Ilchyshyn Bohdan</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</footer>*/}
            </BrowserRouter>
        );
    }
}

export default App;
