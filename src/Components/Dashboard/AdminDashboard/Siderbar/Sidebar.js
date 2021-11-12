import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Route, Switch, Link, useHistory, useRouteMatch } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';
import UserReview from '../Main/MakeAdmin/MakeAdmin';

const Sidebar = () => {

    const history = useHistory();
    let { path, url } = useRouteMatch();

    const Providers = useContext(AuthContext)
    const {user, logout} = Providers

    const logOutHandler = () => {
        logout()
        history.push('/')
    }

    return (
        <div className="mt-5">
            <h2>Admin Dashboard</h2>
            <Link to={`${url}/manageAllProducts`}>Manage All Products</Link>
            <br />
            <Link to={`${url}/manageAllOrders`}>Manage All Orders</Link>
            <br />
            <Link to={`${url}/addproduct`}>Add a product</Link>
            <br />
            <Link to={`${url}/makeAnAdmin`}>Make an admin</Link>
            <br />
            <Button className="mt-3"onClick={logOutHandler} variant="outline-primary">Logout</Button>

                
        </div>
    );
};

export default Sidebar;