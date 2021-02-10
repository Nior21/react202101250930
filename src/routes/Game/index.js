import {useState, useEffect, useContext} from "react";
import PokemonCard from "../../components/PokemonCard";
import Layout from "../../components/Layout";

import {Button} from "react-bootstrap";
import "../../bootstrap.min.css"
import {FireBaseContext} from "../../context/firebaseContext";

import s from "./style.module.css";

const GamePage = () => {
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

     const handleChangeActive = (uniqID) => {
        console.log(uniqID)
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((accumulator, currentValue) => {
                const pokemon = {...currentValue[1]}
                if (currentValue[0] === uniqID) {
                    pokemon.isActive = !pokemon.isActive;
                    firebase.postPokemon(currentValue[0], pokemon);
                }
                accumulator[currentValue[0]] = pokemon
                return accumulator;
            }, {})
        })
    }

    const handleAddPokemon = () => {
        const data = {
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
        firebase.addPokemon(data, async () => {
            await getPokemons();
        })

    };

    const deck = Object.entries ( pokemons ).map (
        ([key,
             {
                 id,
                 name,
                 img,
                 type,
                 values,
                 isActive = false
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
                    <Button variant="dark" onClick={handleAddPokemon} block>
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