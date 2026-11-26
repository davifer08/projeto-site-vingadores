import { Link } from "react-router-dom";
import styles from "../css/Navbar.module.css"

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Link className={styles.link} to="/">Home</Link>
            <Link className={styles.link} to="sagaInfinito">Saga do Infinito</Link>
        </nav>
    );
};

export default Navbar;