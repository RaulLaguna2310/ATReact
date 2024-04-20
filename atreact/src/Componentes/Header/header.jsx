import {Link } from "react-router-dom"

function Header(){
    return(
    <header>
        <nav>
           <a><Link to = '/'>Home</Link></a>
           <a><Link to = 'Sobre'>Sobre</Link></a>
           <a><Link to = 'Contato'>Contato</Link></a>
        </nav>
    </header>
    )
}
export default Header