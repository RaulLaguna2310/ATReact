import Button from "../Button/buttonSobre"
import TelaFrente from "./ImagensConSob/Img1Sobre.png"
import TelaCostas from "./ImagensConSob/Img2Sobre.png"
import Cards from "../Main/SobreCards"




export default  function Sobre(){
    return(
        <>
        <main>
            <div className="Main">
                <div className="Main2">
                    <div className="TituloSobre">
                        <h1>Bem vindo à <br /> revolução dos <br /> vídeos!</h1>
                        <p>
                            Somos uma startup com o objetivo de facilitar <br /> a produção de conteudo em larga escala com <br /> qualidade profissional, capaz de atingir uma <br /> audiência de milhões de seguidores.
                        </p>

                        <Button/>
                    </div>

                    <div className="Imagens">
                        <img className="imagemFrente" src={TelaFrente}  />
                        <img className="imagemCostas" src={TelaCostas}/>
                    </div>
                           
                </div>
                <Cards/>
            </div>
        </main>
        
        </>
    )
}