import {useState, useEffect, useContext} from "react";
import PokemonCard from "../../../../components/PokemonCard";
import Layout from "../../../../components/Layout";

import {Button} from "react-bootstrap";
import "../../../../bootstrap.min.css"

import {FireBaseContext} from "../../../../context/firebaseContext";

import s from "./style.module.css"

const StartPage = () => {
    const firebase = useContext(FireBaseContext)
    const [pokemons, setPokemons] = useState ( {} );


    useEffect (() => {
        firebase.getPokemonSocket((pokemons) => {
            setPokemons(pokemons);
        })

        return () => firebase.offPokemonSocket();
    }, [])

    const getPokemons = async () => {
        const response = await firebase.getPokemonsOnce()
        setPokemons(response)
    }

    const handleChangeSelected = key => {
        setPokemons(prevState => ({
                ...prevState,
                [key]: {
                    ...prevState[key],
                    selected: !prevState[key].selected,
                }
            }
        ))
    }

    const deck = Object.entries ( pokemons ).map (
        ([key,
             {
                 id,
                 name,
                 img,
                 type,
                 values,
                 selected
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
                isSelected={ selected }
                onChangeActive={ () => handleChangeSelected ( key ) }
            />
    );

    return (
        <>
            <Layout id="game"
                    title="Game"
            >
                <div>
                    <Button variant="dark" block>
                        Start Game
                    </Button>
                </div>
                <br/>
                <div className={ s.flex }>
                    {
                        deck
                    }
                </div>
            </Layout>
        </>
    );
}

export default StartPage;