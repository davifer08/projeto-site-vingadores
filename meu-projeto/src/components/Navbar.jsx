import { Link } from "react-router-dom";
import styles from "../css/Navbar.module.css"

function Navbar(){
    return(
        <nav className={styles.Navbar}>
            <Link to="/">Home</Link>
            <Link to="sagaInfinito">Saga do Infinito</Link>
        </nav>
    );
};

export default Navbar;