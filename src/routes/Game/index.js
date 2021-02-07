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
                                onChangeActive={
                                    (id) => {
                                        setPokemons(prevState => {
                                            return Array.from ( prevState, (pokemon) => {
                                                if (pokemon.id === id) {
                                                    pokemon.isActive = true
                                                }
                                                return pokemon
                                            } )
                                        })
                                    }
                                }
                            />
                        )
                    }
                </div>
            </Layout>
        </>
    )
}

export default GamePage;