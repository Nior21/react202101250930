import { useState } from 'react';
import s from './style.module.css';
import cn from 'classnames';

const NavBar = () => {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(!isActive);
    }
    return (
        <nav id={s.navbar}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a className={cn(s.menuButton, {[s.active]: isActive})}>
                    <span/>
                </a>
            </div>
        </nav>
    )
}

export default NavBar;