import React, { useCallback, useEffect } from "react";

import {
  Container,
  Sidebar,
  Logo,
  AddFeatureButton,
  Content,
  StyledLink,
} from "@pages/Main/styles";

import useSWR from "swr";
import fetcher from "@utils/fetcher";
import axios from "axios";
import { Outlet, useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const { data, mutate } = useSWR("/api/user", fetcher);
  const navigate = useNavigate();

  const onClickLogout = useCallback(async () => {
    await axios.post("/api/user/logout").then((response) => {
      console.log(response.data);
      mutate(false);
    });
  }, []);

  useEffect(() => {
    if (data === false) {
      navigate("/login");
    }
  }, [data]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <ToastContainer autoClose={1000} />
      <Sidebar>
        <Logo>
          <img src="https://via.placeholder.com/30" alt="Logo" />
          <span>{data?.nickname}</span>
          <button onClick={onClickLogout}>Logout</button>
        </Logo>
        <AddFeatureButton>
          <StyledLink to={"/main/examTypeList"}>Exam</StyledLink>
        </AddFeatureButton>
        <AddFeatureButton>
          <StyledLink to={"/main/calendar"}>Calendar</StyledLink>
        </AddFeatureButton>
      </Sidebar>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};
export default Main;
