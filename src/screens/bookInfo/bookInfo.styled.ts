import tw from "tw-tailwind";

const MainContainer = tw.div`
w-full
bg-base-300
	
`;
const Heading = tw.div`
text-3xl font-semibold
pb-8
`;
const DashboardData = tw.div`
hero min-h-screen bg-base-200
`;
const BookData = tw.div`
hero-content flex-col lg:flex-row
`;
const BookImageDiv = tw.div`
indicator
`;
const BookImageLabel = tw.span`
indicator-item badge badge-secondary
`;
const BookImage = tw.img`
max-w-sm rounded-lg shadow-2xl mx-8
`;

const BookInformation = tw.div`

`;
const BookInfoHeading = tw.h1`
text-5xl font-bold
`;
const BookInfoDetails = tw.div`
flex flex-row my-4 items-center	justify-between
`;
const BookInfoDetailsDiv = tw.div`
avatar items-center	 gap-4
`;
const BookInfoAuthorDiv = tw.div`
w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2
`;

const BookInfoDetailsNormalText = tw.h3`
text-lg
`;
const BookInfoDetailLabel = tw.div`
badge badge-outline
`;
const BookInfoDetailDesc = tw.div`
py-4
`;
const BookInfoRating = tw.div`
flex items-center gap-2
`;
export {
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
  BookInfoRating,
};
