import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Fullscreen from "react-full-screen";
import windowSize from 'react-window-size';

import Navigation from './Navigation';
import NavBar from './NavBar';
import Breadcrumb from './Breadcrumb';
import Loader from "../Loader";
import adminRoutes from "../../../routes";
import customerRoutes from "../../../user-routes";
import AdminNavigation from "./Navigation";
import CustomerNavigation from './Navigation/customerNavigation'
import Aux from "../../../hoc/_Aux";
import * as actionTypes from "../../../store/actions";
import { localDataSet } from '../../../config/localDataSet';
import AuthService from '../../../services/authService';
import './app.scss';
const AuthServiceApi = new AuthService();
let menu = ''

class AdminLayout extends Component {

    constructor(props) {
        super(props)
        this.state = {
            role: '',
            routes: adminRoutes
        }
    }

    fullScreenExitHandler = () => {
        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
            this.props.onFullScreenExit();
        }
    };

    componentDidMount() {
        console.log(' AuthServiceApi.getProfile().role', AuthServiceApi.getProfile().role)
        switch (AuthServiceApi.getProfile().role) {
            case 1:
                this.setState({
                    routes: adminRoutes
                })
                break
            case 2:
                this.setState({
                    routes: customerRoutes,
                })
                break
        }
    }

    componentWillMount() {
        if (this.props.windowWidth > 992 && this.props.windowWidth <= 1024 && this.props.layout !== 'horizontal') {
            this.props.onComponentWillMount();
        }
    }

    mobileOutClickHandler() {
        if (this.props.windowWidth < 992 && this.props.collapseMenu) {
            this.props.onComponentWillMount();
        }
    }

    requireAuth() {
        if (!localDataSet.getLocal('token')) {
            this.props.history.replace('/login')
        }
    }
    render() {
        /* full screen exit call */
        document.addEventListener('fullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('webkitfullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('mozfullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('MSFullscreenChange', this.fullScreenExitHandler);

        if (this.state.routes) {
            menu = this.state.routes.map((route, index) => {
                return (route.component) ? (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        onEnter={this.requireAuth()}
                        render={props => (
                            <route.component {...props} />
                        )} />
                ) : (null);
            });
        }


        return (
            <Aux>
                <Fullscreen enabled={this.props.isFullScreen}>
                    {AuthServiceApi.getProfile().role == 1 ? <AdminNavigation /> : <CustomerNavigation />}
                    {/* <Navigation /> */}
                    <NavBar />
                    <div className="pcoded-main-container" onClick={() => this.mobileOutClickHandler}>
                        <div className="pcoded-wrapper">
                            <div className="pcoded-content">
                                <div className="pcoded-inner-content">
                                    <Breadcrumb />
                                    <div className="main-body">
                                        <div className="page-wrapper">
                                            <Suspense fallback={<Loader />}>
                                                <Switch>
                                                    {menu}
                                                    {/* <Redirect from="/" to={this.props.defaultPath} /> */}
                                                </Switch>
                                            </Suspense>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fullscreen>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        defaultPath: state.defaultPath,
        isFullScreen: state.isFullScreen,
        collapseMenu: state.collapseMenu,
        configBlock: state.configBlock,
        layout: state.layout
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFullScreenExit: () => dispatch({ type: actionTypes.FULL_SCREEN_EXIT }),
        onComponentWillMount: () => dispatch({ type: actionTypes.COLLAPSE_MENU })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(windowSize(AdminLayout));