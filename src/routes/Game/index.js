import ActionButton from "../../components/ActionButton";

import s from "./style.module.css";


const GamePage = () => {

    return (
        <>
            <div className={s.root}>
                <div className={s.container}>
                    <h1>This is Game Page!!!</h1>
                    <ActionButton name="Stop Game" to="/home"/>
                </div>
            </div>
        </>
    )
}

export default GamePage;