import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import AddProduct from './AddProducts/AddProduct';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageOrders from './ManageOrders/ManageOrders';
import ManageProducts from './ManageProducts/ManageProducts';

const Main = () => {
    let { path } = useRouteMatch();
    return (
        <div>
             <Switch>
                    <Route path={`${path}/manageAllProducts`}>
                        <ManageProducts />
                    </Route>
                    <Route path={`${path}/manageAllOrders`}>
                        <ManageOrders />
                    </Route>
                    <Route path={`${path}/addproduct`}>
                        <AddProduct />
                    </Route>
                    <Route path={`${path}/makeAnAdmin`}>
                        <MakeAdmin />
                    </Route>
                </Switch>
                
        </div>
    );
};

export default Main;