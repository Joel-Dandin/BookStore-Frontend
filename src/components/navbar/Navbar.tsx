import {
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
} from "./navbar.styled"

export const Navbar = () => {
    return (
        <MainNavbar>
            <LogoLinkDiv>
                <LogoLink href="/Dashboard">Book Store</LogoLink>
            </LogoLinkDiv>
            <DataLinks>
                <CartButton>
                    <CartButtonData>
                        <SVGImage xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </SVGImage>
                        <LabelSpan>0</LabelSpan>
                    </CartButtonData>
                </CartButton>

                <ProfileDiv>
                    <ProfileImageDiv tabIndex={0} >
                        <ProfileImage>
                            <img src={"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}/>
                        </ProfileImage>
                    </ProfileImageDiv>
                    <ProfileImageDList tabIndex={0}>
                        <ProfileImageDListItem><a href="/">Profile</a></ProfileImageDListItem>
                        <ProfileImageDListItem><a href="/MyDashboard">My Dashboard</a></ProfileImageDListItem>
                        <ProfileImageDListItem><a href="/Login">Logout</a></ProfileImageDListItem>
                    </ProfileImageDList>
                </ProfileDiv>
            </DataLinks>
        </MainNavbar>
    )
}
