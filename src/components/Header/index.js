import s from './style.module.css';

const Header = ({ title, desc, onClickButton }) => {
    const handleClick = () => {
        onClickButton && onClickButton('game');
    }
    return (
        <div className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                { title && <h1>{title}</h1> }
                { desc && <p>{desc}</p> }
                <button onClick={handleClick} className={s.button}>
                    Start Game
                </button>
            </div>
        </div>
    )
}

export default Header;