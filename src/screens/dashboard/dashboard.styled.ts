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
flex
flex-col
items-center	
pt-8
pb-4
`;
const BookList = tw.div`
grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4
`;

export {MainContainer,
    Heading,
    DashboardData,
    BookList};