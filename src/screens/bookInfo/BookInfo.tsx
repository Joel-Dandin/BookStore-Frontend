import { Navbar } from "../../components"
import {
  MainContainer,
  Heading,
  DashboardData,
  BookData,
  BookImageDiv,
  BookImageLabel,
  BookImage,
  BookInformation,
  BookInfoHeading,
  BookInfoDetails,
  BookInfoDetailsDiv,
  BookInfoAuthorDiv,
  BookInfoDetailsNormalText,
  BookInfoDetailLabel,
  BookInfoDetailDesc,
  BookInfoRating
} from "./bookInfo.styled"

export const BookInfo = ({ bought }: { bought: boolean }) => {
  return (
    <MainContainer>
      <Navbar />
      <DashboardData>
        <BookData>
          <BookImageDiv>
            <BookImageLabel>1000+</BookImageLabel>
            <BookImage src="https://m.media-amazon.com/images/I/81S0LnPGGUL._AC_UF1000,1000_QL80_.jpg" />

          </BookImageDiv>
          <BookInformation>
            <BookInfoHeading >Harry Potter and the Half-Blood Prince</BookInfoHeading>
            <BookInfoDetails >
              <BookInfoDetailsDiv>
                <BookInfoAuthorDiv>
                  <img src="https://m.media-amazon.com/images/S/amzn-author-media-prod/8cigckin175jtpsk3gs361r4ss.jpg" />
                </BookInfoAuthorDiv>
                <BookInfoDetailsNormalText>J. K. Rowling / Mary GrandPré</BookInfoDetailsNormalText>
              </BookInfoDetailsDiv>
              <BookInfoDetailLabel>Fiction</BookInfoDetailLabel>

            </BookInfoDetails>
            <BookInfoRating>
              <BookInfoDetailsNormalText>Rating : </BookInfoDetailsNormalText>
              <BookInfoDetailsNormalText >4.49 </BookInfoDetailsNormalText>
              <div className="rating">

                <input type="radio" name="rating-1" className="mask mask-star" />
                <input type="radio" name="rating-1" className="mask mask-star" checked />
                <input type="radio" name="rating-1" className="mask mask-star" />
                <input type="radio" name="rating-1" className="mask mask-star" />
                <input type="radio" name="rating-1" className="mask mask-star" />
              </div>
            </BookInfoRating>
            <BookInfoDetailDesc>Harry's 6th year at Hogwarts. Voldemort gains power as Harry learns more about his past. Dumbledore gives Harry private lessons to prepare for battle against Voldemort. Relationships and romance bloom among the students. Harry tries to unravel the secrets around Voldemort's rise to power and Professor Snape's role. He becomes obsessed with the Half-Blood Prince's Potions book. Danger and betrayal lurk around every corner. Harry must find and destroy Voldemort's remaining Horcruxes before it's too late. Overall, it sets the stage for the ultimate showdown between Harry and Voldemort in the final book.</BookInfoDetailDesc>
            {bought ?
              <button className="btn btn-primary capitalize">Buy Now</button>
              : <button className="btn btn-primary capitalize">Read Now</button>
            }

          </BookInformation>
        </BookData>
      </DashboardData>
    </MainContainer>
  )
}
