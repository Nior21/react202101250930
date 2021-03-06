import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
import cn from 'classnames';

import HomePage from './routes/Home';
import GamePage from './routes/Game';
import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';
import AboutPage from './routes/About';
import ContactPage from './routes/Contact';
import NotFoundPage from './routes/NotFound';

import {FireBaseContext} from './context/firebaseContext';
import Firebase from './service/firebase'

import s from './style.module.css';

const App = () => {
    const location = useLocation()
    const isPadding = location.pathname === "/" || location.pathname === "/game/board"

    return (
        <FireBaseContext.Provider value={new Firebase()}>
            <Switch>
                <Route path="/404" component={NotFoundPage} />
                <Route>
                    <MenuHeader bgActive={!isPadding} />
                    <div className={cn(s.wrap, {
                        [s.isHomePage]: isPadding
                    })}>
                        <Switch>
                            <Route path="/" exact component={HomePage} />
                            <Route path="/home" render={() => (<Redirect to="/" />)} />
                            <Route path="/game" component={GamePage} />
                            <Route path="/about" component={AboutPage} />
                            <Route path="/contact" component={ContactPage} />
                            <Route render={() => (<Redirect to="/404" />)} />
                        </Switch>
                    </div>
                    <Footer />
                </Route>
            </Switch>
        </FireBaseContext.Provider>
    )

}

export default App;