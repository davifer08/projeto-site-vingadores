import styles from "../css/CardFilmes.module.css"

function CardFilmes({imagem, nome}){
    return(
        <div className={styles.card}>
            <img className={styles.imagem} src={imagem} alt={nome} />
            <h2>{nome}</h2>
        </div>
        
    );
};

export default CardFilmes;