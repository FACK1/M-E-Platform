import React, { Component } from "react";
import MainForm from "../../Form";
import { Title, StyledPage } from "./index.style";

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
        <StyledPage>
          <Title>تسجيل الدخول الى حسابك </Title>
          <MainForm
            fields={fields}
            action={this.submitAction}
            operationName="تسجيل الدخول الى حسابك"
          />
        </StyledPage>
      </React.Fragment>
    );
  }
}
export default Login;
