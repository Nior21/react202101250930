import s from "./style.module.css";
import MenuHeader from "../../components/MenuHeader";

const GamePage = ({ onChangePage }) => {
    const handleClick = (page) => {
        onChangePage && onChangePage('app');
    };

    return (
        <>
            <MenuHeader />
            <div className={s.root}>
                <div className={s.container}>
                    <h1>This is Game Page!!!</h1>
                    <button className={s.button} onClick={handleClick}>
                        Stop Game
                    </button>
                </div>
            </div>
        </>
    )
}

export default GamePage;