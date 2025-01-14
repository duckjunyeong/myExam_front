import React, { useState, useCallback } from "react";
import {
  Container,
  SignupForm,
  Title,
  Subtitle,
  Error,
  InputLabel,
  Input,
  LoginLink,
  Button,
} from "./styles";
import axios from "axios";
import useInput from "@hooks/useInput";
const Signup = () => {
  const [nickname, onChangeNickName, setNickname] = useInput("");
  const [email, onChangeEmail, setEmail] = useInput("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isCorrectPassword, setIsCorrectPassword] = useState(true);
  const [signUpSucess, setSignUpSucess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
      setIsCorrectPassword(e.target.value === passwordCheck);
    },
    [passwordCheck]
  );
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setIsCorrectPassword(e.target.value === password);
    },
    [password]
  );
  const resetInput = useCallback(() => {
    setPassword("");
    setPasswordCheck("");
    setEmail("");
    setNickname("");
  }, []);
  const signUpSumbit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!isCorrectPassword) {
        return;
      }
      try {
        await axios
          .post("/api/signup", { nickname, email, password })
          .then((response) => {
            setSignUpSucess(true);
            resetInput();
            console.log(response);
          });
      } catch (error) {
        console.error(error.response.data);
        setErrorMessage(error.response.data);
      }
    },
    [nickname, email, password, passwordCheck, isCorrectPassword, resetInput]
  );
  return (
    <Container>
      <SignupForm onSubmit={signUpSumbit}>
        <Title>Sign Up</Title>
        <Subtitle>Create a new account</Subtitle>

        <InputLabel>
          {/* 임시 SVG 아이콘 */}
          <svg width="16" height="16" />
          Full Name Nick Name
        </InputLabel>
        <Input
          type="text"
          name="nickname"
          value={nickname}
          onChange={onChangeNickName}
        />

        <InputLabel>
          {/* 임시 SVG 아이콘 */}
          <svg width="16" height="16" />
          Email
        </InputLabel>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={onChangeEmail}
        />

        <InputLabel>
          {/* 임시 SVG 아이콘 */}
          <svg width="16" height="16" />
          Password
        </InputLabel>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={onChangePassword}
        />

        <InputLabel>
          {/* 임시 SVG 아이콘 */}
          <svg width="16" height="16" />
          Confirm Password
        </InputLabel>
        <Input
          type="password"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
        />

        <Button>Sign Up</Button>
        {errorMessage !== "" && <Error> {errorMessage} </Error>}
        {!isCorrectPassword && <Error> 비밀번호가 일치하지 않습니다. </Error>}
        {signUpSucess && <Subtitle>회원가입이 완료되었습니다. </Subtitle>}
        <LoginLink>
          Already have an account? <a href="/login">Login</a>
        </LoginLink>
      </SignupForm>
    </Container>
  );
};

export default Signup;
