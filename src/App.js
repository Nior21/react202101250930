import { useState } from 'react';

import { useRouteMatch, Route, Switch } from "react-router-dom"
import cn from "classnames";

import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";

import s from "./style.module.css";

const App = () => {
    const match = useRouteMatch('/');
    /**
    const [page, setPage] = useState('app')
    const handleChangePage = (page) => {
        setPage(page);
    };
    switch (page) {
        case 'app':
            return <HomePage onChangePage={handleChangePage}/>
        case 'game':
            return <GamePage onChangePage={handleChangePage}/>
        default:
            return <HomePage />
    }
     */

    return (
        <Switch>
            <Route>
                <MenuHeader bgActive={!match.isExact} />
                <div className={cn(s.wrap, {
                    [s.isHomePage]: match.isExact
                })}>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/home" component={HomePage} />
                        <Route path="/game" component={GamePage} />
                        <Route path="/about" render={() => (
                            <h1>This is page About</h1>
                        )} />
                        <Route path="/contact" render={() => (
                            <h1>This is page Contact</h1>
                        )} />
                    </Switch>
                </div>
                <Footer />
            </Route>
            <Route render={() => (
                <h1>404 Page Not Found</h1>
            )}/>
        </Switch>
    )
}

export default App;