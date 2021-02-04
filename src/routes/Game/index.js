import ActionButton from "../../components/ActionButton";

import s from "./style.module.css";
import Layout from "../../components/Layout";
import pokemons from "../../components/PokemonCard/pokemons.json";
import PokemonCard from "../../components/PokemonCard";


const GamePage = () => {

    return (
        <>
            <div className={s.root}>
                <div className={s.moon}></div>
                <div className={s.container}>
                    <h1>This is Game Page!!!</h1>
                    <ActionButton name="Stop Game" to="/home"/>
                </div>
                <Layout id="card"
                        title="Card"
                        colorTitle="#FEFEFE"
                        colorBg="#202736"
                >
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
                </Layout>
            </div>
        </>
    )
}

export default GamePage;