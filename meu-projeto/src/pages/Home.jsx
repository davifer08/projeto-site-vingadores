import CardFilmes from "../components/CardFilmes";
import xmen1 from "../assets/xmen-1.png"
import xmen2 from "../assets/xmen-2.png"
import styles from "../css/Home.module.css"

function Home(){
    return(
        <div className={styles.home}>
            <h1 className={styles.titulo}>Guia Preparatório de <i>Vingadores: Doutor Destino</i></h1>
            <p>Este guia vai esclarecer quais filmes e séries serão essenciais para assistir o próximo lançamento da <i>Marvel</i>, "Vingadores: Doutor Destino", dia 16 de dezembro de 2026.</p>
            <p>O guia está separado pelas duas sagas do <i>Universo Cinematográfico da Marvel</i> (no topo do site), a Saga do Infinito e a Saga do Multiverso, e aqui embaixo estão filmes que não fazem parte das duas sagas, mas são importantes para o entendimento do filme:</p>

            <div>
                <CardFilmes  imagem={xmen1} nome="X-men: O Filme (2000)"></CardFilmes>
                <CardFilmes imagem={xmen2} nome="X-Men 2 (2003)"></CardFilmes>
            </div>
            
        </div>
    );
};

export default Home;