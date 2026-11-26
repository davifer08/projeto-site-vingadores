import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="sagaInfinito">Saga do Infinito</Link>
        </nav>
    );
};

export default Navbar;