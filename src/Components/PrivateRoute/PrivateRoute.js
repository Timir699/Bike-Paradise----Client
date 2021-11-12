import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRoute = ({children, ...rest}) => {
    // hooks
    const Providers = useContext(AuthContext)
    const {user, isLoading } = Providers

    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }

    return (
        <div>
            <Route 
                {...rest}
                render={({location}) => user.email ? children : 
                <Redirect to={{
                    pathname:"/Login",
                    state: {from : location}
                }} /> } >
            </Route>
        </div>
    );
};

export default PrivateRoute;