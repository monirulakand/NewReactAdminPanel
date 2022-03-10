import React from 'react';
import './style/adminPanel.scss';
import {BrowserRouter,Route, Switch, Redirect} from "react-router-dom";
import AppRoute from "./route/AppRoute";
import DashboardPage from "../src/pages/DashboardPage";
import MainLayout from "../src/components/Layout/MainLayout";
import PageSpinner from "../src/components/PageSpinner";
import CardPage from "../src/pages/CardPage";
import TablePage from "../src/pages/TablePage";
import FormPage from "../src/pages/FormPage";
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <MainLayout breakpoint={this.props.breakpoint}>
                        <React.Suspense fallback={<PageSpinner />}>
                            <Route exact path="/" component={DashboardPage} />
                            <Route exact path="/cards" component={CardPage} />
                            <Route exact path="/tables" component={TablePage} />
                            <Route exact path="/forms" component={FormPage} />
                            
                        </React.Suspense>
                    </MainLayout>
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        );
    }
}

const query = ({ width }) => {
    if (width < 575) {
        return { breakpoint: 'xs' };
    }

    if (576 < width && width < 767) {
        return { breakpoint: 'sm' };
    }

    if (768 < width && width < 991) {
        return { breakpoint: 'md' };
    }

    if (992 < width && width < 1199) {
        return { breakpoint: 'lg' };
    }

    if (width > 1200) {
        return { breakpoint: 'xl' };
    }

    return { breakpoint: 'xs' };
};

export default App;
