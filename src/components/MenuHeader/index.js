import { useState } from 'react';
import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuHeader = ({menuItems}) => {
    const [menuState, setMenuState] = useState(false);
    const handleClickHamburger = (menuState) => {
        setMenuState(!menuState);
    };
    return (
        <>
            <Menu
                menuState={menuState}
                menuItems={menuItems}
            />
            <NavBar
                menuState={menuState}
                onChangeMenuState={handleClickHamburger}
            />
        </>
    )
};


export default MenuHeader;