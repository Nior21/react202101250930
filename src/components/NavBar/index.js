import cn from 'classnames';
import s from './style.module.css';

const NavBar = ({menuState, onChangeMenuState}) => {
    const handleClickHamburger = () => {
        onChangeMenuState && onChangeMenuState(menuState);
    };
    return (
        <nav onClick={handleClickHamburger} className={cn(s.navbar, {[s.bgActive]: menuState})}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a href="#!" className={cn(s.menuButton, {[s.active]: menuState})}>
                    <span />
                </a>
            </div>
        </nav>
    );
};

export default NavBar;