import {useState, useEffect} from "react";
import PokemonCard from "../../components/PokemonCard";
import Layout from "../../components/Layout";

import database from "../../service/firebase";

import s from "./style.module.css";
import {generateUniqueID} from "web-vitals/dist/lib/generateUniqueID";

const GamePage = () => {
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        database.ref ( "pokemons" ).once("value", (snapshot) => {
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

    const addPokemon = () => {
        const newKey = database.ref().child("pokemons").push().key;


        const updates = {};
        updates["/pokemons/" + newKey] =
            {
                abilities: ["keen-eye", "tangled-feet", "big-pecks"],
                base_experience: 122,
                height: 11,
                id: 25,
                img:
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
                name: "pidgeotto",
                stats: {
                    attack: 60,
                    defense: 55,
                    hp: 63,
                    "special-attack": 50,
                    "special-defense": 50,
                    speed: 71,
                },
                type: "flying",
                values: {
                    bottom: 7,
                    left: 5,
                    right: 2,
                    top: "A",
                },
            };

        return database.ref().update(updates);
    };



    return (
        <>
            <Layout id="game"
                    title="Game"
            >
                <div>
                    <button onClick={addPokemon} className="btn btn-secondary mr-2">
                        Add Pokemon
                    </button>
                </div>
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