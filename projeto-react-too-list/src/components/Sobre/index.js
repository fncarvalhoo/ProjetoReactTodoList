import { useState } from 'react';
import { Container, Content, Footer } from './styled.js'

export function About() {
    const [selected, setSelected] = useState("Sobre")

    function selectedContent() {
        switch (selected) {
            case "Sobre":
                return (
                    <div>
                    <p class="sobreTexto"><span class="marca">&lt;/FN&gt;</span><br/>Meu nome é Fernando Carvalho e sou um apaixonado por tecnologia. Meu primeiro contato com programação foi em 2018, quando ainda estava no ensino médido. Apesar de ter gostado da área, só comecei a dar o devido foco em 2021, quando decidi sair da área de publicidade e procurar por algo que realmente me despertasse vontade de trabalhar.<br/>
                        Hoje já entendo tecnologias voltadas o para Front e Backend. Sinto que estou exatamente onde queria estar e me    considero em constante evolução.
                    </p>
                    </div>
                    
                );
            case "Skills":
                return (
                    <div>
                    <h1>Linguagens:
                    <br/>
                    <img class="icon" src={"https://cdn-icons-png.flaticon.com/512/226/226777.png"} alt="Imagem Java"/>
                    <img class="icon" src={"https://cdn-icons-png.flaticon.com/512/174/174854.png"} alt="Imagem HTML"/>
                    <img class="icon" src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="Imagem CSS"/>
                    <img class="icon" src={"https://cdn-icons-png.flaticon.com/512/5968/5968292.png"} alt="Imagem JavaScript"/>
                    <br/>
                    Ferramentas:
                    <br/>
                    <img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="Imagem VSCode"/>
                    <img class="icon" src="https://dbeaver.com/img/dbeaver-head.png" alt="Imagem Dbeave"/>
                    <img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/1200px-Github-desktop-logo-symbol.svg.png" alt="Imagem GitDesktop"/>

                    <img class="icon" src="https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png" alt="Imagem GitDesktop"/>

                    <img class="icon" src="https://www.clipartmax.com/png/middle/241-2411261_categories-spring-tool-suite-icon.png" alt="Imagem GitDesktop"/>
                    </h1>
                    </div>
            
                );
            case "Contatos":
                return (
                    <div id='contatos'>
                    <a href='https://www.linkedin.com/in/fernando-carvalho-93a971241/' target="_blank"><img id="imagemContato" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Imagem Linkedin"></img></a>
                    <br/>
                    <a href="https://www.instagram.com/fncarvalho_/" target="_blank"><img id="imagemContato" src='https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white' alt="Imagem Instagram"></img></a>
                    <br/>
                    <a href='https://discord.gg/bzpzHuEeDn' target="_blank"><img id="imagemContato" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Imagem Discord"></img></a>
                    </div>
                    
                )
            case "Portfólio":
                return(
                <div id="Portfólio">
                <h1><a href='https://github.com/FNCarvalh0'>Github</a></h1>  
                </div>  
                )
            default:
                break;
        }
    }

    return (
        <div>
        <Container>
            <img id="fotoPerfil" src={"https://avatars.githubusercontent.com/u/111467444?v=4"} alt="foto-perfil"/>
            <h2>Fernando Carvalho</h2>
            <h3>Estudante FullStack</h3>
            <Content>
                <header>
                    <span onClick={() => setSelected("Sobre")}>Sobre</span>
                    <span onClick={() => setSelected("Skills")}>Skills</span>
                    <span onClick={() => setSelected("Contatos")}>Contatos</span>
                    <span onClick={() => setSelected("Portfólio")}>Portfólio</span>
                </header>
                {selectedContent()}

            </Content>
        </Container>
        <Footer>
        </Footer>
        </div>
    )
}