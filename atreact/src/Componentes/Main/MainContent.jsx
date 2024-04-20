import MainImg from "../ImagensHome/MainIMG.png"
import MainButton from "../Main/MainButton"
import MainCards from "../Main/MainCards"

function MainContent(){
        return(
            <main>
                <div className="Mainzao">
                <div className="Mainzin">
                    <div className="MainTxt">
                        <h1>Crie seus vídeos online!</h1>
                        <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
                        <MainButton></MainButton>
                    </div>
                    <div className="MainImagem">
                    <img src={MainImg}/>
                    </div>
                </div>
                <MainCards></MainCards>
                </div>
            </main>
        )
}
export default MainContent