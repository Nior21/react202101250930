import { useState } from 'react';
import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuHeader = ({ bgActive }) => {
    const [menuState, setMenuState] = useState(null);
    const handleClickHamburger = () => {
        setMenuState(menuState => !menuState);
    };
    return (
        <>
            <Menu
                menuState={menuState}
            />
            <NavBar
                menuState={menuState}
                bgActive={bgActive}
                onClickHamburger={handleClickHamburger}
            />
        </>
    )
};

export default MenuHeader;