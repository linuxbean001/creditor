import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;


const DashBoard = React.lazy(() => import('./views/Debtor/DashBoard/DashBoard'));
const AddOrder = React.lazy(() => import('./views/Debtor/Order/AddOrder'));
const ListOrder = React.lazy(() => import('./views/Debtor/Order/ListOrder'));



const routes = [
    { path: '/dashboard', exact: true, name: 'DashBoard', component: DashBoard },
    { path: '/Order/Add', exact: true, name: 'AddOrder', component: AddOrder },
    { path: '/Order/List', exact: true, name: 'ListOrder', component: ListOrder },
];

export default routes;