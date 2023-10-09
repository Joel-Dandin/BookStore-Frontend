
import { Book, Navbar } from '../../components'
import {
    MainContainer,
    Heading,
    DashboardData,
    BookList
} from './dashboard.styled'

export const Dashboard = () => {
    return (
        <MainContainer>
            <Navbar />
            <DashboardData>
                <Heading>The Top Picks</Heading>
                <BookList>
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                </BookList>
            </DashboardData>
        </MainContainer>
    )
}
