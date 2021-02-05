import ActionButton from "../../components/ActionButton";

import pokemons from "../../components/PokemonCard/pokemons.json";
import PokemonCard from "../../components/PokemonCard";

import s from "./style.module.css";

const GamePage = () => {
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
                    />)
                }
            </div>
        </>
    )
}

export default GamePage;