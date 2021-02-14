import {Route, Switch, useRouteMatch} from "react-router-dom";
import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
import {PokemonContext} from "../../context/pokemonContext";
import {useState} from "react";

const GamePage = () => {

    const [selectedPokemons, setSelectedPokemons] = useState ( {} )

    const [selectedPokemonsOnFinish, setSelectedPokemonsOnFinish] = useState ( {} ) // TODO: Использовать для записи выбранной карты на Finish (... или без контекста обойтись?)

    const [deck2, setDeck2] = useState ( {} )

    const [isWin, setWin] = useState ( false )

    const match = useRouteMatch ();

    const handleSetDeck1 = (key, pokemon) => {
        setSelectedPokemons ( prevState => {
            if (prevState[key]) {
                const copyState = {...prevState}
                delete copyState[key]

                return copyState
            }
            return {
                ...prevState,
                [key]: pokemon,
            }
        } )
    };


    const handleSetWin = (state) => {
        setWin(state)
    }

    const handleSetDeck2 = (cards) => {
        setDeck2(cards)
        console.log(`####: Deck2`, cards)
        // TODO: Здесь можно расположить выбор карты при победе (?)
    };

    const handleClearState = () => {
        setSelectedPokemons({})
        setDeck2({})
        setWin(false)
    }

    return (
        <PokemonContext.Provider value={ {
            pokemons: selectedPokemons,
            setDeck1: handleSetDeck1,
            deck2: deck2,
            setDeck2: handleSetDeck2,
            isWin: isWin,
            setWin: handleSetWin,
            onClearState: handleClearState,
            // TODO: Здесь нужно добавить функцию выбора карты на Finish

        } }>
            <Switch>
                <Route path={ `${ match.path }/` } exact component={ StartPage }/>
                <Route path={ `${ match.path }/board` } component={ BoardPage }/>
                <Route path={ `${ match.path }/finish` } component={ FinishPage }/>
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage