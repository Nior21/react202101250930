import { useState } from 'react';
import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuHeader = () => {
    const [menuState, setMenuState] = useState(true);
    const handleClickHamburger = (menuState) => {
        setMenuState(!menuState);
    };
    return (
        <>
            <Menu menuState={menuState} />
            <NavBar
                menuState={menuState}
                onChangeMenuState={handleClickHamburger}
            />
        </>
    )
};
export default MenuHeader;