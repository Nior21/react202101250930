import { useHistory, Link } from "react-router-dom";

import s from "./style.module.css";

const ActionButton = ({ name, to }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push( { to })
    }

    return (
        <Link to={ to } className={ s.button } onClick={handleClick}>
            { name }
        </Link>
    );
}

export default ActionButton;