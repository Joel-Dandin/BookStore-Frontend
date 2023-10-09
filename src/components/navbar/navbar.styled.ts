import tw from "tw-tailwind";

const MainNavbar = tw.div`
navbar bg-base-100
`;
const LogoLinkDiv = tw.div`
flex-1
`;
const LogoLink = tw.a`
btn btn-ghost normal-case text-xl
`;
const DataLinks = tw.div`
flex-none
`;
const CartButton = tw.label`
btn btn-ghost btn-circle
`;
const CartButtonData = tw.label`
indicator
`;
const LabelSpan = tw.span`
adge badge-sm indicator-item
`;
const SVGImage = tw.svg`
h-5 w-5
`;
const ProfileDiv = tw.div`
dropdown dropdown-end
`;
const ProfileImage = tw.div`
w-10 rounded-full
bg-base-300
`;
const ProfileImageDiv = tw.label`
btn btn-ghost btn-circle avatar
`;
const ProfileImageDList= tw.ul`
enu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52
`;
const ProfileImageDListItem= tw.li`
`;
export {
    MainNavbar,
    LogoLinkDiv,
    LogoLink,
    DataLinks,
    CartButton,
    CartButtonData,
    LabelSpan,
    SVGImage,
    ProfileDiv,
    ProfileImageDiv,
    ProfileImage,
    ProfileImageDList,
    ProfileImageDListItem

};