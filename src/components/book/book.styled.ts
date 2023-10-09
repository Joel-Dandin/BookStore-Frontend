import tw from "tw-tailwind";

const MainCardContainer = tw.div`
card w-64 bg-base-100 shadow-xl
`;

const BookImage = tw.figure`
aspect-[3/4]
`;
const BookDataDiv = tw.div`
card-body
`;
const BookDataTitle = tw.h2`
card-title
`;
const BookDataTitleLabel = tw.div`
badge badge-secondary
`;
const BookData = tw.p`
`;
const BookDataLabelArray = tw.div`
card-actions justify-end
`;
const BookDataLabel = tw.div`
badge badge-outline
`;
export {MainCardContainer,
    BookImage,
    BookDataDiv,
    BookDataTitle,
    BookDataTitleLabel,
    BookData,
    BookDataLabelArray,
    BookDataLabel
};