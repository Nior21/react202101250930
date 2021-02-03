import s from './style.module.css';

const Header = ({ title, desc, onChangePage }) => {
    const handleClick = () => {
        console.log(`####: <Header /> game`)
        onChangePage && onChangePage('game');
    }
    return (
        <div className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                { title && <h1>{title}</h1> }
                { desc && <p>{desc}</p> }
                <button className={s.button} onClick={handleClick}>
                    Start Game
                </button>
            </div>
        </div>
    )
}

export default Header;