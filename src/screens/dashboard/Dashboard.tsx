import Navbar from '../../components/navbar/Navbar'
import { MainContainer,
    Heading 
} from './dashboard.styled'

const Dashboard = () => {
    return (
        <MainContainer>
            <Navbar />
            <Heading>The Top Picks</Heading>
        </MainContainer>
    )
}

export default Dashboard