import tw from "tw-tailwind";

const MainCardContainer = tw.a`
card w-64 bg-base-100 shadow-xl group rounded-2xl
`;

const BookImage = tw.figure`
relative rounded-2xl
`;
const BookDataDiv = tw.div`
h-[60%] bottom-0 card-body absolute hidden group-hover:flex flex-col bg-base-200 opacity-90 rounded-2xl
`;
const BookDataTitle = tw.h2`
card-title flex justify-between
`;
const BookDataTitleLabel = tw.div`
badge badge-secondary justify-self-end
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