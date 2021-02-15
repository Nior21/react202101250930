import PokemonCard from "../../../../../../components/PokemonCard"
import cn from "classnames"

import s from "./style.module.css"
import {useState} from "react";

const PlayerBoard = ({player, cards, onClickCard}) => {
    const [isSelected, setSelected] = useState ( null )
    return (
        <>
            {console.log(`####: cards`, cards)}
            {
                cards.map ( (item) => (
                    <div
                        className={ cn ( s.cardBoard, {
                            [s.selected]: isSelected === item.id
                        } ) }
                        onClick={() => {
                            setSelected ( item.id )
                            onClickCard && onClickCard( {
                                player,
                                ...item,
                            })
                        }}
                    >
                        <PokemonCard
                            key={ item.key }
                            id={ item.id }
                            name={ item.name }
                            img={ item.img }
                            type={ item.type }
                            values={ item.values }
                            minimize
                            isActive
                        />
                    </div>
                ) )
            }
        </>
    );
};

export default PlayerBoard