
import { Book, Navbar } from '../../components'
import {
    MainContainer,
    Heading,
    DashboardData,
    BookList
} from './myDashboard.styled'

export const MyDashboard = () => {
    return (
        <MainContainer>
            <Navbar />
            <DashboardData>
                <Heading>Owned Books</Heading>
                <BookList>
                    <Book />
                    <Book />
                    <Book />
                    <Book />

                </BookList>
            </DashboardData>
        </MainContainer>
    )
}
