function CardFilmes({imagem, nome}){
    return(
        <div>
            <img src={imagem} alt={nome} />
            <h2>{nome}</h2>
        </div>
        
    );
};

export default CardFilmes;