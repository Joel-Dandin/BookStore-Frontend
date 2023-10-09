import React from 'react'
import {
  MainCardContainer, BookImage,
  BookDataDiv,
  BookDataTitle,
  BookDataTitleLabel,
  BookData,
  BookDataLabelArray,
  BookDataLabel
} from './book.styled'

const Book = () => {
  return (
    // <MainCardContainer>
    //     <BookImage>
    //         <img src="https://media.npr.org/assets/img/2023/05/02/water_custom-3c24e76a8ab773623dd89fcb25a7e8cc66765c6d.jpg" alt="Book" />
    //     </BookImage>
    //     <BookDataDiv>
    //         <BookDataTitle>
    //             Shoes!
    //             <BookDataTitleLabel>NEW</BookDataTitleLabel>
    //         </BookDataTitle>
    //         <BookData>If a dog chews shoes whose shoes does he choose?</BookData>
    //         <BookDataLabelArray>
    //             <BookDataLabel>Fashion</BookDataLabel>
    //             <BookDataLabel>Products</BookDataLabel>
    //         </BookDataLabelArray>
    //     </BookDataDiv>
    // </MainCardContainer>
    <MainCardContainer>
      <BookImage>
        <img src="https://media.npr.org/assets/img/2023/05/02/water_custom-3c24e76a8ab773623dd89fcb25a7e8cc66765c6d.jpg" alt="Water" />
      </BookImage>

      <BookDataDiv>
        <BookDataTitle>
          Water
          <BookDataTitleLabel>
            NEW
          </BookDataTitleLabel>
        </BookDataTitle>

        <BookData>If a dog chews shoes whose shoes does he choose?</BookData>

        <BookDataLabelArray>
          <BookDataLabel>Fashion</BookDataLabel>
          <BookDataLabel>Products</BookDataLabel>
        </BookDataLabelArray>
      </BookDataDiv>
    </MainCardContainer>
  )
}

export default Book