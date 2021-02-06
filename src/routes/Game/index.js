import ActionButton from "../../components/ActionButton";

import POKEMONS from "../../components/PokemonCard/pokemons.json";
import PokemonCard from "../../components/PokemonCard";

import {useState} from "react";

const GamePage = () => {
    let [pokemons, setActive] = useState(
        Array.from ( POKEMONS, (value, key) => (
            {
                key: key,
                id: POKEMONS[key].id,
                name: POKEMONS[key].name,
                type: POKEMONS[key].type,
                img: POKEMONS[key].img,
                values: POKEMONS[key].values,
                isActive: false,
            }
        ) )
    );

    const onCardClick = (clickedId) => {
        console.log(`####: clickedId: ${clickedId}`);
        setActive(() => {
            let pokemons_temp = Array.from( pokemons, (value, key) => (
                {
                    key: key,
                    id: pokemons[key].id,
                    name: pokemons[key].name,
                    type: pokemons[key].type,
                    img: pokemons[key].img,
                    values: pokemons[key].values,
                    isActive: !pokemons[key].isActive
                }
            ))
            return pokemons_temp;
        })
    }

    return (
        <>
            <h1>This is Game Page!!!</h1>
            <ActionButton />
            <div className="flex">
                {
                    pokemons.map(item => <PokemonCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        type={item.type}
                        img={item.img}
                        values={item.values}
                        isActive={item.isActive}
                        onCardClick={onCardClick}
                    />)
                }
            </div>
        </>
    )
}

export default GamePage;