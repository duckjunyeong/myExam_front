import React from "react";
import {
  Container,
  SignupForm,
  Title,
  Subtitle,
  InputLabel,
  Input,
  LoginLink,
  Button,
} from "./styles";
const Signup = () => {
  return (
    <Container>
      <SignupForm>
        <Title>Sign Up</Title>
        <Subtitle>Create a new account</Subtitle>

        <InputLabel>
          {/* 임시 SVG 아이콘 */}
          <svg width="16" height="16" />
          Full Name
        </InputLabel>
        <Input type="text" placeholder="" />

        <InputLabel>
          {/* 임시 SVG 아이콘 */}
          <svg width="16" height="16" />
          Email
        </InputLabel>
        <Input type="email" placeholder="" />

        <InputLabel>
          {/* 임시 SVG 아이콘 */}
          <svg width="16" height="16" />
          Password
        </InputLabel>
        <Input type="password" placeholder="" />

        <InputLabel>
          {/* 임시 SVG 아이콘 */}
          <svg width="16" height="16" />
          Confirm Password
        </InputLabel>
        <Input type="password" placeholder="" />

        <Button>Sign Up</Button>
        <LoginLink>
          Already have an account? <a href="/login">Login</a>
        </LoginLink>
      </SignupForm>
    </Container>
  );
};

export default Signup;
