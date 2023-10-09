
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
                    <Book imageurl={'https://m.media-amazon.com/images/I/81S0LnPGGUL._AC_UF1000,1000_QL80_.jpg'} bookName={'Harry Potter and the Half-Blood Prince'} bookId={'1'} bookData={'J.K. Rowling/Mary GrandPré'} bookLabel={'Fiction'} />
                    <Book imageurl={'https://m.media-amazon.com/images/I/81S0LnPGGUL._AC_UF1000,1000_QL80_.jpg'} bookName={'Harry Potter and the Half-Blood Prince'} bookId={'1'} bookData={'J.K. Rowling/Mary GrandPré'} bookLabel={'Fiction'} />
                    <Book imageurl={'https://m.media-amazon.com/images/I/81S0LnPGGUL._AC_UF1000,1000_QL80_.jpg'} bookName={'Harry Potter and the Half-Blood Prince'} bookId={'1'} bookData={'J.K. Rowling/Mary GrandPré'} bookLabel={'Fiction'} />
                    <Book imageurl={'https://m.media-amazon.com/images/I/81S0LnPGGUL._AC_UF1000,1000_QL80_.jpg'} bookName={'Harry Potter and the Half-Blood Prince'} bookId={'1'} bookData={'J.K. Rowling/Mary GrandPré'} bookLabel={'Fiction'} />
                    <Book imageurl={'https://m.media-amazon.com/images/I/81S0LnPGGUL._AC_UF1000,1000_QL80_.jpg'} bookName={'Harry Potter and the Half-Blood Prince'} bookId={'1'} bookData={'J.K. Rowling/Mary GrandPré'} bookLabel={'Fiction'} />

                </BookList>
            </DashboardData>
        </MainContainer>
    )
}
