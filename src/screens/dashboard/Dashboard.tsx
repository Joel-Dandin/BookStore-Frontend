import Book from '../../components/book/Book'
import Navbar from '../../components/navbar/Navbar'
import {
    MainContainer,
    Heading,
    DashboardData,
    BookList
} from './dashboard.styled'

const Dashboard = () => {
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

export default Dashboard