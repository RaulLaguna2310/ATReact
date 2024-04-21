import Pessoa from "../Pages/ImagensConSob/ImgCardSobre.png"

function App(){
    return(
        <div className="containerCards">
            <div className="TextoCards">
                <div className="titulo">
                    <h1>Planos</h1>
                </div>
                <div className="cards">

                    <div className="card1">
                        <div className="card-header"><p>Individual</p> </div>
                        <div className="card-main">
                            <h3 className="h3card">1 usuario </h3>
                            <select className="checkbox">
                            <option value="plano1">10 vídeos <strong>R$40</strong></option>
                            <option value="plano2">20 vídeos <strong>R$50</strong></option>
                            <option value="plano3">30 vídeos <strong>R$50</strong></option>
                            <option value="plano4">40 vídeos <strong>R$60</strong></option>
                            <option value="plano5">50 vídeos <strong>R$70</strong></option>
                            </select>
                        </div>
                        <div className="card-footer">
                            <button className="btnCadastrar">Cadastrar</button>
                        </div>
                    </div>

                    <div className="card1">
                        <div className="card-header2"><p>Profissional - Times</p></div>
                        <div className="linha"></div>
                        <div className="card-main">
                            <h3 className="h3card">1 - 10 Usuários</h3>
                            <select className="checkbox">
                                <option value="1-10">Vídeos Ilimitados <strong>R$40</strong></option>
                            </select>
                            <h3 className="h3card">+ 10 Usuários</h3>
                            <select className="checkbox">
                                <option value="1-10">Vídeos Ilimitados <strong>R$20</strong></option>
                            </select>
                        </div>
                        <div className="card-footer">
                            <button className="btnCadastrar2">Cadastrar</button>
                        </div>
                    </div>

                    <div className="card1">
                        <div className="card-header2"><p>Corporativo</p></div>
                        <div className="linha"></div>
                        <div className="card-main">
                            <img src={Pessoa} width="150" />
                        </div>
                        <div className="card-footer">
                            <button className="btnCadastrar2">Entre em Contato</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default App;