import React from "react";
import {
  Container,
  LoginForm,
  Title,
  Subtitle,
  InputLabel,
  Input,
  Button,
  SignupLink,
} from "@pages/Login/styles";

const Login = () => {
  return (
    <Container>
      <LoginForm>
        <Title>Login</Title>
        <Subtitle>Hey enter your details to sign in to your account</Subtitle>
        <InputLabel>
          {/* SVG 아이콘은 임시로 생략 */}
          <svg width="16" height="16" />
          Enter your username/email
        </InputLabel>
        <Input type="text" placeholder="" />
        <InputLabel>
          {/* SVG 아이콘은 임시로 생략 */}
          <svg width="16" height="16" />
          Enter your password
        </InputLabel>
        <Input type="password" placeholder="" />
        <Button>Login In</Button>
        <SignupLink>
          Don't have an account? <a href="/signup">Signup Now</a>
        </SignupLink>
      </LoginForm>
    </Container>
  );
};

export default Login;
