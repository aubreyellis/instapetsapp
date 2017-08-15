import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Login extends Component {
    render() {
        const LoginWrapper = styled.div`
            display: flex;
            flex-direction: row;
        
        `
        const loggedIn = this.props.loggedIn;
        return (
            <div>
                <LoginWrapper>
                    {loggedIn ? <p> Welcome back, <Link to={`/user/${this.props.username}`}> {this.props.images} </Link> </p> : null }

                    <div onClick={this.props.handleLogout}>
                        {loggedIn ? <Link to="/">Log out</Link> : <Link to="/login">Log in</Link>}
                    </div>
                </LoginWrapper>
            </div>
        );
    }
}

export default Login;