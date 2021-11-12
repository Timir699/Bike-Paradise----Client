import React from 'react';
import { Route, Switch, useRouteMatch, useParams } from 'react-router-dom';

import Payment from '../Main/Payment/Payment';
import MyOrders from './MyOrders/MyOrders';
import UserReview from './UserReviews/UserReview';

const Main = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
             <Switch>
                    <Route path={`${path}/payment`}>
                        <Payment />
                    </Route>
                    <Route path={`${path}/myorders`}>
                        <MyOrders />
                    </Route>
                    <Route path={`${path}/userReview`}>
                        <UserReview />
                    </Route>
                </Switch>
                
        </div>
    );
};

export default Main;