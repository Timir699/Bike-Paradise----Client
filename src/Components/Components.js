import React from 'react';
import {  BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Register from './Register/Register';
import Bikes from './Bikes/Bikes'
import Dashboard from './Dashboard/Dashboard';
import PlaceOrder from './PlaceOrder/PlaceOrder';
import OrderConfirmed from './OrderConfirmed/OrderConfirmed';
import NotFound from '../Components/NotFound/NotFound'
import AdminLogin from './AdminLogin/AdminLogin';

const Components = () => {
    return (
        <div>
            <BrowserRouter>
            <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/Login">
                        <Login />
                    </Route>
                    <Route path="/bikes">
                        <Bikes />
                    </Route>
                    <Route path="/bikes">
                        <Bikes />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/adminLogin">
                        <AdminLogin />
                    </Route>
                    <PrivateRoute path="/dashboard">
                        <Dashboard />
                    </PrivateRoute>
                    <PrivateRoute path="/placeOrder">
                        <PlaceOrder />
                    </PrivateRoute>
                    <PrivateRoute path="/orderConfirmed">
                        <OrderConfirmed />
                    </PrivateRoute>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default Components;