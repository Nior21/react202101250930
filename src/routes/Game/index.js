import {useState, useEffect} from "react";
import PokemonCard from "../../components/PokemonCard";
import Layout from "../../components/Layout";

import database from "../../service/firebase";

import s from "./style.module.css";

const GamePage = () => {
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        database.ref ( "pokemons" ).once ("value", (snapshot) => {
            setPokemons (snapshot.val ())
        })
    }, [])

    const onChangeActive = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((accumulator, currentValue) => {
                const pokemon = {...currentValue[1]}
                if (pokemon.id === id) {
                    database
                        .ref ( "pokemons/" + currentValue[0] )
                        .set ( {
                            ...pokemon,
                            isActive: !pokemon.isActive,
                        } )
                        .then ( pokemon.isActive = !pokemon.isActive )
                }
                accumulator[currentValue[0]] = pokemon
                return accumulator;
            }, {})
        })
    }

    return (
        <>
            <Layout id="game"
                    title="Game"
            >
                <div className={s.flex}>
                    {
                        Object.entries(pokemons).map((
                            [key, {id, name, img, type, values, isActive=true}]
                        ) =>
                            <PokemonCard
                                key={key}
                                id={id}
                                name={name}
                                img={img}
                                type={type}
                                values={values}
                                isActive={isActive}
                                onChangeActive={onChangeActive}
                            />
                        )
                    }
                </div>
            </Layout>
        </>
    )
}

export default GamePage;