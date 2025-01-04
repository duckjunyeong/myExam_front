import React, { useCallback, useState } from "react";
import {
  Container,
  LoginForm,
  Title,
  Subtitle,
  InputLabel,
  Input,
  Button,
  SignupLink,
  Error,
} from "@pages/Login/styles";
import { useNavigate } from "react-router";
import useInput from "@hooks/useInput";
import axios from "axios";
import useSWR from "swr";
import fetcher from "@utils/fetcher";

const Login = () => {
  const { data, error, mutate } = useSWR("api/user", fetcher);
  const [email, onChangeEmail, setEmail] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const resetInput = useCallback(() => {
    setEmail("");
    setPassword("");
  }, []);

  const onSubmitLogin = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("/api/login", { email, password });
        resetInput();
        mutate(response);
      } catch (error) {
        setLoginError(error.response?.status === 401);
        console.error(error);
      }
    },
    [email, password]
  );

  if (data) {
    console.log(data);
    navigate("/main");
  }

  return (
    <Container>
      <LoginForm onSubmit={onSubmitLogin}>
        <Title>Login</Title>
        <Subtitle>Hey enter your details to sign in to your account</Subtitle>
        <InputLabel>
          {/* SVG 아이콘은 임시로 생략 */}
          <svg width="16" height="16" />
          Enter your username/email
        </InputLabel>
        <Input
          type="text"
          name="email"
          value={email}
          onChange={onChangeEmail}
        />
        <InputLabel>
          {/* SVG 아이콘은 임시로 생략 */}
          <svg width="16" height="16" />
          Enter your password
        </InputLabel>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={onChangePassword}
        />
        <Button>Login In</Button>
        {loginError && <Error> 등록되지 않은 회원입니다. </Error>}
        <SignupLink>
          Don't have an account? <a href="/signup">Signup Now</a>
        </SignupLink>
      </LoginForm>
    </Container>
  );
};

export default Login;
