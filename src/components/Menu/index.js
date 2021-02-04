import cn from 'classnames';
import s from './style.module.css';

const Menu = ({menuState, menuItems}) => {
    return (
        <div className={cn(s.menuContainer, {[s.active]: menuState, [s.deactive]: !menuState})}>
            <div className={s.overlay} />
            <div>
                <ul>
                    {menuItems.map(item =>
                        <li>
                            <a href={item.route}>
                                {item.name}
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Menu;