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
        <div className="card w-96 bg-base-100 shadow-xl group">
  <figure className="relative">
    <img src="https://media.npr.org/assets/img/2023/05/02/water_custom-3c24e76a8ab773623dd89fcb25a7e8cc66765c6d.jpg" alt="Water" />
  </figure>

  <div className="card-body absolute inset-0 hidden group-hover:flex flex-col justify-center items-center bg-base-200">
    <h2 className="card-title text-center">
      Water
      <div className="badge badge-secondary">NEW</div> 
    </h2>

    <p className="text-center">If a dog chews shoes whose shoes does he choose?</p>

    <div className="card-actions justify-center">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    )
}

export default Book