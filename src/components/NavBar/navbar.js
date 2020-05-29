import React from "react";
import "./navbar.css"
import AuthService from "C:/Users/BOHDAN/Documents/GitHub/ilchyshyn-bohdan.github.io/src/services/auth.service"
import {Link} from "react-router-dom";

class NavBar extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
        return (
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
                            <h1>Hello</h1>
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
        );
    }
}

export default NavBar;
