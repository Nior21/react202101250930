import { useState } from 'react';
import s from './style.module.css';
import cn from 'classnames';

const Menu = () => {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(!isActive);
    }
    return (
        <div className={cn(s.menuContainer, {[s.active]: isActive})} onClick={handleClick}>
            <div className={s.overlay} />
            <div className={s.menuItem}>
                <ul>
                    <li>
                        <a href="#welcome">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#game">
                            GAME
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;