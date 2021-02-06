import cn from 'classnames';

import s from './style.module.css';

import ActiveButton from "../../ActionButton"

const NavBar = ({ menuState, bgActive = false, onClickHamburger }) => {
    const handleClickHamburger = () => {
        onClickHamburger && onClickHamburger(menuState);
    };
    return (
        <nav id={s.navbar} className={cn({
            [s.bgActive]: bgActive
        })}>
            <div className={s.navWrapper}>
                <p>
                    <ActiveButton
                        name={"Logo"}
                    />
                </p>
                <div className={cn(s.menuButton, {
                        [s.active]: menuState
                    })}
                    onClick={handleClickHamburger}
                >
                    <span />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;