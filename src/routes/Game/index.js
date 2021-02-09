import {useState, useEffect} from "react";
import PokemonCard from "../../components/PokemonCard";
import Layout from "../../components/Layout";

import database from "../../service/firebase";

import s from "./style.module.css";

import {Button} from "react-bootstrap";
import "../../bootstrap.min.css"

const GamePage = () => {
    const [pokemons, setPokemons] = useState ( {} );
    const load = () => database.ref("pokemons" ).once("value", (snapshot) => {
        setPokemons(snapshot.val())
    } )
    useEffect (() => {
        load()
    }, [])

     const handleChangeActive = (uniqID) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((accumulator, currentValue) => {
                const pokemon = {...currentValue[1]}
                if (currentValue[0] === uniqID) {
                    database
                        .ref ( "pokemons/" + currentValue[0] )
                        .set ( {
                            ...pokemon,
                            isActive: !pokemon.isActive,
                        } )
                        .then (pokemon.isActive = !pokemon.isActive)
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
                id: 17,
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

        database.ref().update(updates)

        return load()
    };



    const deck = Object.entries ( pokemons ).map (
        ([key,
             {
                 id,
                 name,
                 img,
                 type,
                 values,
                 isActive = true
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
                isActive={ isActive }
                onChangeActive={ handleChangeActive }
            />
    )

    return (
        <>
            <Layout id="game"
                    title="Game"
            >
                <div>
                    <Button variant="dark" onClick={addPokemon} block>
                        Add Card
                    </Button>
                </div>
                <div className={s.flex}>
                    {
                        deck
                    }
                </div>
            </Layout>
        </>
    )
}

export default GamePage;