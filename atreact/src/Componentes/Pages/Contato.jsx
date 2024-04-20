import DC from "../Pages/ImagensConSob/DiscordContato.png"
import IT from "../Pages/ImagensConSob/InstagramContato.png"
import TW from "../Pages/ImagensConSob/TwitterContato.png"

export default function Contato(){ 
    return(
    <main>
        <div className="AllContato">
            <div className="ContentContato">
                <h2>Dúvidas e<br></br>suporte, entre<br></br>em contato:</h2>
                <div className="ContenteImgContato">
                    <div className="ImgContato">
                        <img src={TW} alt="twitter"/>
                    </div>
                    <div className="ImgContato">
                        <img src={IT} alt="instagram"/>
                    </div>
                    <div className="ImgContato">
                        <img src={DC} alt="discord"/>
                    </div>
                </div>
            </div>
        <div className="VetLine"></div>
        <div className="FormContato">
            <section id="ContEmail">
                <form>
                <div className="Nome">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" className="TxtBox"></input>
                </div>
                <div className="Email">
                    <label htmlFor="email">Email:</label>
                    <input type="text" className="TxtBox"></input>
                </div>
                <div className="Mensagem">
                    <label htmlFor="mensagem">Mensagem:</label>
                    <input type="text" className="TxtBoxMsg"></input>
                </div>
                <div className="FormButton">
                    <button type="submit">Enviar</button>
                </div>
                </form>
            </section>
        </div>
        </div>
</main>
    )
}
