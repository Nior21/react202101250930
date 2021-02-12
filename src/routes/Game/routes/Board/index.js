import {useContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom"
import {PokemonContext} from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/PokemonCard";
import PlayerBoard from "./component/PlayerBoard";

import s from './style.module.css';

const BoardPage = () => {
    const [board, setBoard] = useState ( [] )
    const [player2, setPlayer2] = useState ( [] )
    const [choiceCard, setChoiceCard] = useState ( null )
    const {pokemons} = useContext ( PokemonContext )
    const history = useHistory ()

    console.log ( '####: board', board, player2 )

    // if (Object.keys(pokemons).length === 0) {
    //     history.replace("/game")
    // }

    useEffect ( async () => {
        const boardResponse = await fetch ( 'https://reactmarathon-api.netlify.app/api/board' )
        const boardRequest = await boardResponse.json ()

        setBoard ( boardRequest.data )

        const player2Response = await fetch ( 'https://reactmarathon-api.netlify.app/api/create-player' )
        const player2Request = await player2Response.json ()

        setPlayer2 ( player2Request.data )
    }, [] )

    function handleClickBoardPlate(position) {
        console.log ( '###: position', position )
        console.log ( '###: choiceCard', choiceCard )
    }

    return (
        <div className={ s.root }>
            <div className={ s.playerOne }>
                <PlayerBoard
                    cards={ Object.values ( pokemons ) }
                    onClickCard={(card) => setChoiceCard(card)}
                />
            </div>
            <div className={ s.board }>
                {
                    board.map ( item => (
                        <div
                            key={ item.position }
                            className={ s.boardPlate }
                            onClick={ () => !item.card && handleClickBoardPlate ( item.position ) }
                        >
                            {
                                item.card && <PokemonCard { ...item } minimize/>
                            }
                        </div>
                    ) )
                }
            </div>

            <div className={ s.playerTwo }>
                <PlayerBoard
                    cards={ player2 }
                    onClickCard={(card) => setChoiceCard(card)}
                />
            </div>
        </div>
    );
};

export default BoardPage;