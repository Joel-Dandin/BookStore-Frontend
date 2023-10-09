import tw from "tw-tailwind";

const MainContainer = tw.div`
w-full
flex
bg-base-300
`;

const MainContainerRight = tw.img`
h-screen
lg:w-[55%]
w-0
object-cover	
`;
const MainContainerLeft = tw.div`
lg:w-[45%]
w-full
flex
justify-center
items-center	
`;


const MainContainerLeftCard = tw.div`
card
w-96
bg-base-100 
shadow-xl
`;

const MainContainerLeftCardData = tw.div`
card-body
`;

const MainContainerLeftHeading = tw.h1`
text-2xl
font-semibold
text-primary-content

`;

const  MainContainerLeftSubText = tw.a`
text-sm
font-normal
`;


const  TextInfoHighlight = tw.span`
text-info

`;
const  MainContainerLeftInput = tw.input`
input 
input-bordered 
w-full 
max-w-xs
text-primary-content

`;
const  MainContainerLeftInputLabel = tw.h4`
text-sm
font-medium
pt-4
text-primary-content
`;
const CheckBoxDiv = tw.div`
flex
flex-row
items-center	
`;

const CheckBox = tw.input`
checkbox
`;

const OptionBox = tw.div`
py-4
flex
items-center
justify-between
`

const PrimaryButtom = tw.button`
btn
btn-primary
capitalize	
`;
export {
    MainContainer,
    MainContainerRight,
    MainContainerLeft,
    MainContainerLeftHeading,
    MainContainerLeftCard,
    MainContainerLeftCardData,
    MainContainerLeftSubText,
    MainContainerLeftInput,
    MainContainerLeftInputLabel,
    TextInfoHighlight,
    CheckBox,
    CheckBoxDiv,
    OptionBox,
    PrimaryButtom
};