import styles from "../css/Rodape.module.css"

function Rodape(){
    return(
        <div className={styles.rodape}>
            <h2>DISPONIVEIS EM</h2>
            <p className={styles.texto}>Disney+</p>
            <p className={styles.texto}>Netflix</p>
            <p className={styles.texto}>Prime</p>
            <p className={styles.texto}>Apple TV / Google Play Filmes</p>
        </div>
    );
};

export default Rodape;