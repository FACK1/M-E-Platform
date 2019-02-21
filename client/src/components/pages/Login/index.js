import React, { Component } from "react";
import logo from '../../../assets/Logo.png';
import MainForm from "../../Form";
import bgLogo from '../../../assets/background-YDRC-Logo.png';

import { Title, StyledPage, StyledDiv, StyledLogo, StyledBgLogo, Styleddiv, Styleddivv} from "./index.style";


class Login extends Component {
  render() {
    const fields = [
      {
        label: " الايميل",
        type: "text",
        name: "email",
        placeholder: "ادخل الايميل"
      },
      {
        label: "كلمة المرور",
        type: "password",
        name: "password",
        placeholder: "ادخل كلمة المرور"
      }
    ];
    return (
      <React.Fragment>
      <StyledDiv>
      <StyledLogo src={logo} />
      <StyledBgLogo src={bgLogo}/>
      </StyledDiv>
      <StyledPage>
        <Styleddiv>
          <Title>تسجيل الدخول الى حسابك </Title>
          <Styleddivv>
          <MainForm
            fields={fields}
            action={this.submitAction}
            operationName="تسجيل الدخول الى حسابك"
          />
          </Styleddivv>
          </Styleddiv>
        </StyledPage>
      </React.Fragment>
    );
  }
}
export default Login;
