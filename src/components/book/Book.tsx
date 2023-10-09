import {
  MainCardContainer, BookImage,
  BookDataDiv,
  BookDataTitle,
  BookDataTitleLabel,
  BookData,
  BookDataLabelArray,
  BookDataLabel
} from './book.styled'

export const Book = ({imageurl,bookName,bookId,bookData,bookLabel}:{imageurl:string,bookName:string,bookId:string,bookData:string,bookLabel:string}) => {
  return (

    <MainCardContainer href='/BookInfo'>
      <BookImage>
        <img src={imageurl} alt="Water" />
      </BookImage>

      <BookDataDiv>
        <BookDataTitle>
        {bookName}
          <BookDataTitleLabel>
          {bookId}
          </BookDataTitleLabel>
        </BookDataTitle>

        <BookData>{bookData}</BookData>

        <BookDataLabelArray>
          <BookDataLabel>{bookLabel}</BookDataLabel>
        </BookDataLabelArray>
      </BookDataDiv>
    </MainCardContainer>
  )
}
