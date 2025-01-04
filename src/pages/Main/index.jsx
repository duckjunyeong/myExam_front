import React, { useCallback, useMemo, useState } from "react";
import {
  Container,
  Sidebar,
  Logo,
  AddFeatureButton,
  AddExamButton,
  Menu,
  MenuItem,
  BottomMenu,
  Settings,
  Categories,
  SearchBar,
  Content,
  SectionContent,
  SectionTitle,
  Section,
  UserInfo,
  InputContainer,
  StyledInput,
  FormContainer,
  SubmitButton,
} from "@pages/Main/styles";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import useInput from "hooks/useInput";
import axios from "axios";
import ExamPaperList from "@components/ExamPaperList";
import ExamTypeList from "@components/ExamTypeList";
import { useNavigate } from "react-router";

const Main = () => {
  const { data, error, mutate } = useSWR("/api/user", fetcher);
  const [showInput, setShowInput] = useState(false);
  const [newTypeName, onChangeNewTypeName, setNewTypeName] = useInput("");

  const navigate = useNavigate();
  const examTypeList = useMemo(() => data?.ExamTypeLists, [data]); // useMemeo?

  const onClickAddNewType = useCallback(() => {
    setShowInput(!showInput);
  }, [showInput]);

  const onSubmitNewType = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const newExamType = await axios.post("/api/main/createExamType", {
          newTypeName,
        });
        setNewTypeName("");
      } catch (error) {
        console.error(error);
      }
    },
    [newTypeName, data]
  );

  const onClickLogout = useCallback(async () => {
    await axios.post("/api/user/logout").then((response) => {
      console.log(response.data);
      mutate(false);
    });
  }, []);

  if (data === false) {
    navigate("/login");
  }

  return (
    <Container>
      <Sidebar>
        <Logo>
          {/* 임시 이미지 */}
          <img src="https://via.placeholder.com/30" alt="Logo" />
          <span>{data?.nickname}</span>
          <button onClick={onClickLogout}>Logout</button>
        </Logo>
        <AddFeatureButton>
          {/* 임시 아이콘 */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 4V12"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M4 8H12"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Add New Feature
        </AddFeatureButton>
        <Menu>
          <MenuItem className="active">
            {/* 임시 아이콘 */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4H12V12H4V4Z"
                stroke="#3498DB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Exam</span>
            <span className="count">12</span>
          </MenuItem>
        </Menu>
      </Sidebar>
      <Content>
        <SearchBar>
          <input type="text" placeholder="Search" />
        </SearchBar>
        <UserInfo>
          <div className="notifications"></div>
          <div className="user-name">Exam</div>
        </UserInfo>
        <AddExamButton onClick={onClickAddNewType}>
          {showInput ? "Close" : "Add New Type"}
        </AddExamButton>
        <InputContainer>
          <form onSubmit={onSubmitNewType}>
            <FormContainer>
              <InputContainer>
                <StyledInput
                  value={newTypeName}
                  onChange={onChangeNewTypeName}
                  type="text"
                  placeholder="Type"
                  show={showInput}
                />
                <SubmitButton type="submit" show={showInput}>
                  Submit
                </SubmitButton>
              </InputContainer>
            </FormContainer>
          </form>
        </InputContainer>
        {examTypeList && examTypeList.length > 0 ? (
          <ExamTypeList examTypeList={examTypeList} />
        ) : (
          <div>no data</div>
        )}
      </Content>
    </Container>
  );
};

export default Main;
