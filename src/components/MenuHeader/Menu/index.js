import cn from 'classnames';
import { Link } from 'react-router-dom';

import s from './style.module.css';

const Menu = ({ menuState, onClickHamburger }) => {
    const handleClickMenuItem = () => {
        onClickHamburger && onClickHamburger(menuState);
    };
    const menuItems = [
        {
            "name": "HOME",
            "route": "/home"
        },
        {
            "name": "GAME",
            "route": "/game"
        },
        {
            "name": "ABOUT",
            "route": "/about"
        },
        {
            "name": "CONTACT",
            "route": "/contact"
        }
    ];
    return (
        <div className={cn(s.menuContainer, {
            [s.active]: menuState === true,
            [s.deactive]: menuState === false
        })}>
            <div className={s.overlay} />
            <div>
                <ul>
                    {menuItems.map(({name, route}, index) =>
                        <li key={index}>
                            <Link to={route} onClick={handleClickMenuItem}>
                                {name}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Menu;