import cn from 'classnames';
import s from './style.module.css';

const NavBar = ({ onClick }) => {
    const handleClick = () => {
        onClick && onClick(false);
    };
    return (
        <nav onClick={handleClick} className={cn(s.navbar, { [s.bgActive]: true })}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a href="#" className={cn(s.menuButton, {[s.active]: true })}>
                    <span />
                </a>
            </div>
        </nav>
    );
};

export default NavBar;