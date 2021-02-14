import {useState, useEffect, useContext} from "react";
import PokemonCard from "../../../../components/PokemonCard";

import {Button} from "react-bootstrap";
import "../../../../bootstrap.min.css"

import {FireBaseContext} from "../../../../context/firebaseContext";

import s from "./style.module.css"
import {PokemonContext} from "../../../../context/pokemonContext";
import {useHistory} from "react-router-dom";

const StartPage = () => {
    const firebase = useContext(FireBaseContext)
    const pokemonsContext = useContext(PokemonContext)                              // Получаем контекст в переменную
    const history = useHistory()
    const [pokemons, setPokemons] = useState ( {} );


    useEffect (() => {
        firebase.getPokemonSocket((pokemons) => {
            setPokemons(pokemons);
        })

        return () => firebase.offPokemonSocket();
    }, [])

    function handleStartGameClick() {
        history.push("/game/board")
    }

    const handleChangeSelected = key => {                   // Обрабатываем щелчок на карточке покемона
        const pokemon = {...pokemons[key]}
        pokemonsContext.setDeck1(key, pokemon)


        setPokemons(prevState => ({                 // Изменение состояния выбранности карточки на противоположное
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
                isSelected={ selected }                            // Передаем в созданную карточку параметр выбранности
                onChangeActive={ () => {
                    if (Object.keys ( pokemonsContext.pokemons ).length < 5 || selected) {
                        handleChangeSelected ( key )
                    }
                } }
            />
    );

    return (
        <>
            <div className={s.buttonWrap}>
                <Button
                    variant="dark"
                    block
                    onClick={handleStartGameClick}
                    disabled={Object.keys(pokemonsContext.pokemons).length < 5}
                >
                    Start Game
                </Button>
            </div>
            <br/>
            <div className={ s.flex }>
                {
                    deck
                }
            </div>
        </>
    );
}

export default StartPage;