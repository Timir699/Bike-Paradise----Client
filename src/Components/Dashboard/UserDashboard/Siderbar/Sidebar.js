import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Route, Switch, Link, useHistory, useRouteMatch } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';
import useAuth from '../../../../Hooks/useAuth';
import UserReview from '../Main/UserReviews/UserReview';

const Sidebar = () => {

    const history = useHistory();
    let {  url } = useRouteMatch();
    const {userId, userData, setUserData} = useAuth()
    console.log(userId);

    const Providers = useContext(AuthContext)
    const { logout} = Providers

    const logOutHandler = () => {
        logout()
        history.push('/')
    }
    const userFetcher = () => {
        fetch(`https://bike-paradise.herokuapp.com/api/users/${userId}`)
        .then( res => res.json())
        .then ( data => {
            console.log(data);
            setUserData(data)
        })
    }

    return (
        <div className="mt-5">
            <h2>User Dashboard</h2>
            <Link to={`${url}/payment`}>Payment</Link>
            <br />
            <Link onClick={userFetcher} to={`${url}/myorders`}>My Orders</Link>
            <br />
            <Link to={`${url}/userReview`}>Review</Link>
            <br />
            <Button className="mt-3"onClick={logOutHandler} variant="outline-primary">Logout</Button>

                
        </div>
    );
};

export default Sidebar;