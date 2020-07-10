import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;


const DashBoard = React.lazy(() => import('./views/Creditor/DashBoard/DashBoard'));
const OrderList = React.lazy(() => import('./views/Creditor/Order/ListOrder'));
const TodayOrder = React.lazy(() => import('./views/Creditor/Calendar/Today'));
const WeekOrder = React.lazy(() => import('./views/Creditor/Calendar/Week'));
const MonthOrder = React.lazy(() => import('./views/Creditor/Calendar/Month'));




const routes = [
    { path: '/dashboard', exact: true, name: 'DashBoard', component: DashBoard },
    { path: '/Order/ListOrder', exact: true, name: 'OrderList', component: OrderList },
    { path: '/Order/Today', exact: true, name: 'TodayOrder', component: TodayOrder },
    { path: '/Order/Week', exact: true, name: 'WeekOrder', component: WeekOrder },
    { path: '/Order/Month', exact: true, name: 'MonthOrder', component: MonthOrder },
];

export default routes;