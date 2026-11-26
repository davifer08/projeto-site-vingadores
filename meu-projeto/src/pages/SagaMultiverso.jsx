import CardFilmes from "../components/CardFilmes";
import styles from "../css/SagaMultiverso.module.css"
import wandaVision from "../assets/wandaVision.png"
import loki from "../assets/loki.png"
import shangChi from "../assets/shang-chi.png"
import aranha3 from "../assets/sem-volta-pra-casa.png"
import drEstranho3 from "../assets/multiverso-da-loucura.png"
import wakanda from "../assets/wakanda.png"
import deadpool from "../assets/deadpool3.png"
import capitao4 from "../assets/capitao4.png"
import thunderbolts from "../assets/thunderbolts.png"
import quarteto from "../assets/quarteto.png"
import aranha4 from "../assets/aranha4.png"

function SagaMultiverso(){
    return(
        <div className={styles.sagaMultiverso}>
            <h1 className={styles.titulo}>Saga do Multiverso</h1>
            <div>
                <CardFilmes imagem={wandaVision} nome="WandaVision (2021)"></CardFilmes>

                <CardFilmes imagem={loki} nome="Loki (2021)"></CardFilmes>

                <CardFilmes imagem={shangChi} nome="Shang-Chi e a Lenda dos Dez Anéis (2021)"></CardFilmes>

                <CardFilmes imagem={aranha3} nome="Homem-Aranha: Sem Volta Para Casa (2021)"></CardFilmes>

                <CardFilmes imagem={drEstranho3} nome="Doutor Estranho no Multiverso da Loucura (2022)"></CardFilmes>

                <CardFilmes imagem={wakanda} nome="Pantera Negra: Wakanda para Sempre (2022)"></CardFilmes>

                <CardFilmes imagem={deadpool} nome="Deadpool & Wolverine (2024)"></CardFilmes>

                <CardFilmes imagem={capitao4} nome="Thunderbolts* (2025)"></CardFilmes>

                <CardFilmes imagem={thunderbolts} nome="Thunderbolts* (2025)"></CardFilmes>

                <CardFilmes imagem={quarteto} nome="Quarteto Fantástico: Primeiros Passos (2025)"></CardFilmes>

                <CardFilmes imagem={aranha4} nome="Homem-Aranha: Um Novo Dia (2026)"></CardFilmes>

            </div>

        </div>
        
    )
}

export default SagaMultiverso;