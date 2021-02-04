import cn from 'classnames';
import s from './style.module.css';

const Menu = ({ menuState }) => {
    const menuItems = [
        {
            "name": "HOME",
            "route": "#welcome"
        },
        {
            "name": "GAME",
            "route": "#game"
        },
        {
            "name": "ABOUT",
            "route": "#about"
        },
        {
            "name": "CONTACT",
            "route": "#contact"
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
                            <a href={route}>
                                {name}
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Menu;