import { useHistory, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const ActionButton = ({ name = "Go Home Page", to= "/" }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push( {to: to})
    }

    return (
        <>
            <Button variant="outline-primary" size="lg" block>
                <Link to={ to } onClick={handleClick}>
                    { name }
                </Link>
            </Button>

        </>
    );
}

export default ActionButton;