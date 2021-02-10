import { useHistory, Link } from "react-router-dom";

import s from "./style.module.css"

const ActionButton = ({ name = "< Home", to= "/", className = s.button }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push( { to })
    }

    return (
        <Link
            to={ to }
            onClick={handleClick}
            className={className}
        >
            { name }
        </Link>
    );
}

export default ActionButton;