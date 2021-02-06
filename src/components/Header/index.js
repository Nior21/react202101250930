import ActionButton from "../ActionButton";

import s from './style.module.css';
import {Button} from "react-bootstrap";

const Header = ({ title, desc }) => {
    return (
        <div className={s.root}>
            <div className={s.forest}></div>
            <div className={s.silhouette }></div>
            <div className={s.moon}></div>
            <div className={s.container}>
                { title && <h1>{title}</h1> }
                { desc && <p>{desc}</p> }
                <ActionButton name="Click to Start Game >>>" to="/game" />
            </div>
        </div>
    )
}

export default Header;