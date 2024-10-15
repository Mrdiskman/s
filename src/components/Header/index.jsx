import { HeaderStyled } from "./styled";

export function Header(){
    return(
        <HeaderStyled>
            <main className="headerMainContent">
                <div className="textContainer">
                    <h1 className="title">Encontre os <p className="paragraph">melhores artigos</p> de programação em um só lugar</h1>
                    <p className="secondParagraph">Explore o topo da programação em um só lugar! Seu destino único para dicas e tendências atuais.</p>
                    <div className="divButton">
                        <button className="search">Buscar Artigos</button>
                    </div>
                </div>

                <img className="photo" src="https://allanlima123.github.io/IFBA-PROJETO/src/assets/img/illustra.png" alt="" />
            </main>
        </HeaderStyled>
    )
}