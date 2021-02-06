import ActionButton from "../../components/ActionButton";

import POKEMONS from "../../components/PokemonCard/pokemons.json";
import PokemonCard from "../../components/PokemonCard";
import {useState} from "react";
import Layout from "../../components/Layout";

const GamePage = () => {
    let [pokemons, setPokemons] = useState(
        Array.from ( POKEMONS, (value, key) => ({
                id: POKEMONS[key].id,
                name: POKEMONS[key].name,
                type: POKEMONS[key].type,
                img: POKEMONS[key].img,
                values: POKEMONS[key].values,
                isActive: false,
            })
        )
    )
    return (
        <>
            <Layout id="contact"
                    title="This is Game Page!!!"
            >
                <ActionButton />
            </Layout>
            <h1></h1>

            <div className="flex">
                {
                    pokemons.map( (value, key) => <PokemonCard
                        key={key}
                        id={value.id}
                        name={value.name}
                        type={value.type}
                        img={value.img}
                        values={value.values}
                        isActive={value.isActive}
                        onChangeActive={
                            (id) => {
                                setPokemons((pokemons) => {
                                    const index = pokemons.findIndex ( (el) => el.id === id )
                                    const oldItem = pokemons[index]
                                    const newItem = {...oldItem, isActive: !oldItem.isActive}
                                    const newArray = [
                                        ...pokemons.slice ( 0, index ),
                                        newItem,
                                        ...pokemons.slice ( index + 1 ),
                                    ]
                                    return newArray
                                })
                            }
                        }
                    />)
                }
            </div>
        </>
    )
}

export default GamePage;