import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/home" />
            )
    )} />
);


const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
// export const PrivateRoute = withRouter(connect(mapStateToProps, null)(Private));