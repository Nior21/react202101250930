import Layout from "../../../../components/Layout";
import {Button} from "react-bootstrap";
import {useContext} from "react";
import {PokemonContext} from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/PokemonCard";
import s from "./style.module.css";
import {useHistory} from "react-router-dom";

const FinishPage = () => {

    const pokemonContext = useContext ( PokemonContext )
    pokemonContext.pokemons && console.log ( `####: pokemonContext.pokemons in Finish`, pokemonContext.pokemons ) // Сюда нужно загрузить данные с картами player1 из стейта в Game
    pokemonContext.deck2 && console.log ( `####: pokemonContext.deck2 in Finish`, pokemonContext.deck2 ) // Так же нужно загрузить данные с картами player2 из стейта в Game

    const history = useHistory ()

    if (pokemonContext.isWin === false) {
        console.log ( "####: You are not Winner!" )
        pokemonContext.onClearState ()
        history.replace ( "/game" )
    }

    const handleClick = () => {
        // Здесь нужно вызывать очищение стейта...
        pokemonContext.onClearState ()
        history.replace ( "/game" )
    }

    return (
        <>
            <Layout
                title={ "You win!" }
            >
                <div className={ s.flex }>
                    {
                        Object.entries ( pokemonContext.pokemons ).map (
                            ([key,
                                 {
                                     id,
                                     name,
                                     img,
                                     type,
                                     values
                                 }
                             ]) =>
                                <PokemonCard
                                    key={ key }
                                    uniqID={ key }
                                    id={ id }
                                    name={ name }
                                    img={ img }
                                    type={ type }
                                    values={ values }
                                    className={ s.card }
                                    isActive={ true }
                                />
                        )
                    }
                </div>
                <br/>

                <Button
                    variant={ "dark" }
                    block
                    onClick={ handleClick }
                >END GAME</Button>

                <br/>
                <div className={ s.flex }>
                    {
                        Object.entries ( pokemonContext.deck2 ).map (
                            ([key,
                                 {
                                     id,
                                     name,
                                     img,
                                     type,
                                     values,
                                     selected // TODO: А вот тут нужен выбор...
                                 }
                             ]) =>
                                <PokemonCard
                                    key={ key }
                                    uniqID={ key }
                                    id={ id }
                                    name={ name }
                                    img={ img }
                                    type={ type }
                                    values={ values }
                                    className={ s.card }
                                    isActive={ true }
                                />
                        )
                    }
                </div>
            </Layout>
        </>
    )
}

export default FinishPage