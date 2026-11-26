import CardFilmes from "../components/CardFilmes";
import styles from "../css/SagaInfinito.module.css"
import homemDeFerro from "../assets/homem-de-ferro.png"
import capitaoAmerica from "../assets/capitao-america.png"
import vingadores from "../assets/vingadores.png"
import guerraCivil from "../assets/guerra-civil.png"
import guerraInfinita from "../assets/guerra-infinita.png"
import ultimato from "../assets/ultimato.png"

function SagaInfinito(){
    return(
        <div className={styles.sagaInfinito}>
            <h1 className={styles.titulo}>Saga do Infinito</h1>
            <div>
                <CardFilmes imagem={homemDeFerro} nome="Homem De Ferro (2008)"/>

                <CardFilmes imagem={capitaoAmerica} nome ="Capitão América: O Primeiro Vingador (2011)"/>

                <CardFilmes imagem={vingadores} nome ="Os Vingadores (2012)"/>

                <CardFilmes imagem={guerraCivil} nome ="Capitão América: Guerra Civil (2016)"/>

                <CardFilmes imagem={guerraInfinita} nome ="Vingadores: Guerra Infinita (2018)"/>

                <CardFilmes imagem={ultimato} nome ="Vingadores: Ultimato (2019)"/>

            </div>

        </div>
        
    )
}

export default SagaInfinito;