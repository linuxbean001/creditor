import React, { Component, Suspense } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

import '../../node_modules/font-awesome/scss/font-awesome.scss';

import Loader from './layout/Loader'
import Aux from "../hoc/_Aux";
import ScrollToTop from './layout/ScrollToTop';
import routes from "../route";
const Register = React.lazy(() => import('../views/Register/Register'));
const Login = React.lazy(() => import('../views/Login/Login'));
const AdminLayout = Loadable({
    loader: () => import('./layout/AdminLayout'),
    loading: Loader
});

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            directoryList: []
        }
    }

    componentDidMount() {

    }
    render() {


        return (

            <HashRouter>

                <ScrollToTop>
                    <Suspense fallback={<Loader />}>
                        <Switch>
                            {/* <Route path="/register" component={Register} />
                            <Route path="/login" component={Login} />
                            <Route path="/" component={Login} /> */}
                            {/* <Route path="/" component={AdminLayout} /> */}
                            <Route path="/register" component={Register} />
                            <Route path="/login" component={Login} />
                            {/* <Route exact path="/" component={Login} /> */}
                            <Route path="/" component={AdminLayout} />
                        </Switch>
                    </Suspense>
                </ScrollToTop>



            </HashRouter>
        );
    }
}

export default App;
