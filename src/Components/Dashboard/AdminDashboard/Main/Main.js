import React from 'react';
import { Route, Switch, Link, useHistory, useRouteMatch, useParams } from 'react-router-dom';

import AddProduct from './AddProducts/AddProduct';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageProducts from './ManageProducts/ManageProducts';
import OrderManage from './OrderManage/OrderManage';

const Main = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
             <Switch>
                    <Route path={`${path}/manageAllProducts`}>
                        <ManageProducts />
                    </Route>
                    <Route path={`${path}/manageAllOrders`}>
                        <OrderManage />
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