import React from 'react'
import { Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = Cookies.get('authToken') !== undefined;
    return (
        <Route
            {...rest}
            render={(props) => 
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Navigate to="/login" />
                )
            }
        />
    );
}

export default PrivateRoute
