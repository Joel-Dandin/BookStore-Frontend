import {
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
} from "./login.styled"
import Loginimage from "./../../assets/Login.avif"
export const Login = () => {
  return (
    <MainContainer>
      <MainContainerLeft>
        <MainContainerLeftCard>
          <MainContainerLeftCardData>
            <MainContainerLeftHeading>
              Sign In to Your Account
            </MainContainerLeftHeading>
            <MainContainerLeftSubText href="#">
              Not a member?
              <TextInfoHighlight>
                &nbsp;Start a 14 day free trial
              </TextInfoHighlight>
            </MainContainerLeftSubText>
            <MainContainerLeftInputLabel>
              Username
            </MainContainerLeftInputLabel>
            <MainContainerLeftInput type="text" placeholder="Username" />
            <MainContainerLeftInputLabel>
              Password
            </MainContainerLeftInputLabel>
            <MainContainerLeftInput type="Password" placeholder="Password" />

            <OptionBox>
              <CheckBoxDiv>
                <CheckBox type="checkbox" />
                <MainContainerLeftSubText>&nbsp;Remember me</MainContainerLeftSubText>
              </CheckBoxDiv>
              <MainContainerLeftSubText href="#" >Forgot password?</MainContainerLeftSubText>
            </OptionBox>

            <PrimaryButtom onClick={() => window.open('/Dashboard', '_self')}>Sign In</PrimaryButtom>
          </MainContainerLeftCardData>
        </MainContainerLeftCard>
      </MainContainerLeft>
      <MainContainerRight src={Loginimage}>
      </MainContainerRight>
    </MainContainer>
  )
}
