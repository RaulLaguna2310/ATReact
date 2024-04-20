import FaceCardImg from "../ImagensHome/FaceCardImg.png";
import InstaCardImg from "..//ImagensHome/InstaCardImg.png";
import TtkCardImg from "../ImagensHome/TtkCardImg.png";
import YtCardImg from "../ImagensHome/YtCardImg.png"

function MainCards(){
        return(
            <div className="AllCards">
                <div className="Card Red">
                    <div className="HeaderCard">
                        <h1>01</h1>
                        <img src={YtCardImg}/>
                    </div>
                    <h3>Youtube</h3>
            <p>
              Produza conteúdo cativante e conquiste seu público com vídeos de
              alta qualidade no maior palco digital do mundo.
            </p>
                </div>

                <div className="Card Yellow">
                    <div className="HeaderCard">
                        <h1>02</h1>
                        <img src={TtkCardImg}/> 
                    </div>
                    <h3>Tiktok</h3>
            <p>
              Faça sua criatividade brilhar em vídeos curtos e envolventes que
              vão cativar a comunidade global do TikTok.
            </p>
                </div>
                
                <div className="Card Green">
                    <div className="HeaderCard">
                        <h1>03</h1>
                        <img src={FaceCardImg}/>
                    </div>
                    <h3>Facebook</h3>
            <p>
              Conecte-se com sua audiência de forma autêntica e impactante
              através de vídeos que se destacam no feed do Facebook.
            </p>
                </div>

                <div className="Card Blue">
                    <div className="HeaderCard">
                        <h1>04</h1>
                        <img src={InstaCardImg}/>
                    </div>
                    <h3>Instagram</h3>
            <p>
              Compartilhe suas histórias de maneira única e conquiste milhões de
              likes no Instagram utilizando Stories e Reels.
            </p>
                </div>
            </div>
        )
}
export default MainCards 