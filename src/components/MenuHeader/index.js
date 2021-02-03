import { useState } from 'react';
import Menu from "../Menu";
import NavBar from "../NavBar";
import HomePage from "../../routes/Home";

const MenuHeader = ({ onClickNavButton }) => {
    const [isActive, setNavBar] = useState(true);
    const handleClickNavButton = () => {
        onClickNavButton && onClickNavButton();
        console.log(`####: <MenuHeader />`);
    };
    return (
        <>
            <Menu />
            <NavBar
                onClick={handleClickNavButton}
            />
        </>
    )
};
export default MenuHeader;