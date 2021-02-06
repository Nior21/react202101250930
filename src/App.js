import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom"
import cn from "classnames";
import firebase from "firebase";

import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import NotFoundPage from "./routes/NotFound";

import s from "./style.module.css";

const firebaseConfig = {
    apiKey: "AIzaSyCpzO1F28gHp5nclrC1aoPJlzmTSasKT-o",
    authDomain: "pokemon-game-e1680.firebaseapp.com",
    databaseURL: "https://pokemon-game-e1680-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-e1680",
    storageBucket: "pokemon-game-e1680.appspot.com",
    messagingSenderId: "410074435445",
    appId: "1:410074435445:web:719c2b2623a1156cba0d3c"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref('pokemons').once('value', (snapshot) => {
    console.log('snapshot', snapshot.val());
})

const App = () => {
    const match = useRouteMatch('/');

    return (
        <Switch>
            <Route path="/404" component={NotFoundPage} />
            <Route>
                <MenuHeader bgActive={!match.isExact} />
                <div className={cn(s.wrap, {
                    [s.isHomePage]: match.isExact
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
    )
}

export default App;