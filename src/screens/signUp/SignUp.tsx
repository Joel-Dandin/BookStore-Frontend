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
} from "./signUp.styled"
import Loginimage from "./../../assets/Login.avif"
export const SignUp = () => {
  return (
    <MainContainer>
      <MainContainerLeft>
        <MainContainerLeftCard>
          <MainContainerLeftCardData>
            <MainContainerLeftHeading>
              Create a account now
            </MainContainerLeftHeading>
            <MainContainerLeftSubText href="#">

              <TextInfoHighlight>Already a member?
              </TextInfoHighlight>
            </MainContainerLeftSubText>
            <MainContainerLeftInputLabel>
              Username
            </MainContainerLeftInputLabel>
            <MainContainerLeftInput type="text" placeholder="Username" />
            <MainContainerLeftInputLabel>
              Email
            </MainContainerLeftInputLabel>
            <MainContainerLeftInput type="email" placeholder="Email" />
            <MainContainerLeftInputLabel>
              Password
            </MainContainerLeftInputLabel>
            <MainContainerLeftInput type="Password" placeholder="Password" />
            <MainContainerLeftInputLabel>
              Retype Password
            </MainContainerLeftInputLabel>
            <MainContainerLeftInput type="Password" placeholder="Password" />
            <OptionBox>
              <CheckBoxDiv>
                <CheckBox type="checkbox" />
                <MainContainerLeftSubText>&nbsp;Agree to Terms and Conditions</MainContainerLeftSubText>
              </CheckBoxDiv>
             </OptionBox>

            <PrimaryButtom onClick={() => window.open('/Dashboard', '_self')}>Sign Up</PrimaryButtom>
          </MainContainerLeftCardData>
        </MainContainerLeftCard>
      </MainContainerLeft>
      <MainContainerRight src={Loginimage}>
      </MainContainerRight>
    </MainContainer>
  )
}
