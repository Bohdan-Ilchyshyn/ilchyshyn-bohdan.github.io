import React from "react";
import "./login.css"
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "C:/Users/BOHDAN/Documents/GitHub/ilchyshyn-bohdan.github.io/src/services/auth.service"
import MediaQuery from 'react-responsive'

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

class Login extends React.Component{

    constructor(props) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin (e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.username, this.state.password).then(
                () => {
                    this.props.history.push("/profile");
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        return (
            <div className="col-sm-12 col-md-9 col-lg-6 mx-auto">
                <div className="card card-container" style={{
                    backgroundColor: "#1F222E",
                    top: "250px",
                    border: 0,
                    color: "#e2e2e2",
                    }}>
                    <div className="card-body" style={{padding: "2rem"}}>
                        <h5 className="text-center" style={{
                            color: "#afb1be",
                            marginBottom: "2rem",
                            fontWeight: "bold",
                            fontSize: "1.5rem",
                        }}>LogIn</h5>

                        <Form
                            onSubmit={this.handleLogin}
                            ref={c => {
                                this.form = c;
                            }}
                        >
                            <div className="form-signin" style={{width: "100%"}}>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.onChangeUsername}
                                        validations={[required]}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChangePassword}
                                        validations={[required]}
                                    />
                                </div>

                                <div className="form-group">
                                    <button
                                        className="btn btn-primary btn-block"
                                        disabled={this.state.loading}
                                    >
                                        {this.state.loading && (
                                            <span className="spinner-border spinner-border-sm"></span>
                                        )}
                                        <span>Login</span>
                                    </button>
                                </div>

                                {this.state.message && (
                                    <div className="form-group">
                                        <div className="alert alert-danger" role="alert">
                                            {this.state.message}
                                        </div>
                                    </div>
                                )}
                                <CheckButton
                                    style={{ display: "none" }}
                                    ref={c => {
                                        this.checkBtn = c;
                                    }}
                                />
                                <hr className="my-4"/>
                            </div>
                        </Form>
                    </div>

                </div>
                {/*<div className="card" style={{*/}
                {/*    backgroundColor: "#1F222E",*/}
                {/*    top: "250px",*/}
                {/*    border: 0,*/}
                {/*    color: "#e2e2e2"}}>*/}
                {/*    <div className="card-body">*/}
                {/*        <h5 className="card-title text-center">LogIn</h5>*/}
                {/*        <Form className="form-signin" onSubmit={this.handleLogin()} ref={c=>{this.form = c;}}>*/}
                {/*            <div className="form-label-group">*/}
                {/*                <input type="text" id="inputUsername" className="form-control" placeholder="username" required autoFocus/>*/}
                {/*                <label for="inputUsername">Username</label>*/}
                {/*            </div>*/}

                {/*            <div className="form-label-group">*/}
                {/*                <input type="password" id="inputPassword" className="form-control"*/}
                {/*                       placeholder="Password" required/>*/}
                {/*                    <label htmlFor="inputPassword">Password</label>*/}
                {/*            </div>*/}

                {/*            <div className="custom-control custom-checkbox mb-3">*/}
                {/*                <input type="checkbox" className="custom-control-input" id="customCheck1"/>*/}
                {/*                    <label className="custom-control-label" htmlFor="customCheck1">Remember*/}
                {/*                        password</label>*/}
                {/*            </div>*/}

                {/*            <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit"*/}
                {/*                    onClick="login()" disabled={this.state.loading}>*/}
                {/*                {this.state.loading && (*/}
                {/*                    <span className="spinner-border spinner-border-sm"/>*/}
                {/*                )}*/}
                {/*                <span>Sign in</span>*/}
                {/*            </button>*/}

                {/*            <hr className="my-4"/>*/}
                {/*        </Form>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Login;
