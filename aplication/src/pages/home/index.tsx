import { useNavigate } from "react-router-dom"
import { Header } from "../../components/Header"
import bannerImage from '../../assets/github-mark.svg'
import { Button  } from "../../components/Button";
import { Container, TextContent, Title, TitleHighLight } from './styles'

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<>
        <Header autenticado={true}/>
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                    Implemente <br />
                    </TitleHighLight>
                    o seu futuro agora!
                </Title>
                <TextContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perspiciatis minus doloremque officia fugiat, 
                    aliquid repellat a accusantium eum nisi exercitationem, dolorem vero. Ab repudiandae est accusamus tempore quidem doloribus.
                </TextContent>
                <Button title="Começar Agora" variant="secondery" onClick={handleClickSignIn}/>
            </div>
            <div>
                <img src={bannerImage} alt="Image princiapal" />
            </div>
        </Container>
    </>)
}

export { Home }