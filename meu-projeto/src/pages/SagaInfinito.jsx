import CardFilmes from "../components/CardFilmes";
import homemDeFerro from "../assets/homem-de-ferro.png"

function SagaInfinito(){
    return(
        <div>
            <CardFilmes imagem={homemDeFerro} nome = "Homem De Ferro"/>
        </div>
        
    )
}

export default SagaInfinito;