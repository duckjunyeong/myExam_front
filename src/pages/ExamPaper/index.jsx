import {
  Header,
  AppContainer,
  ProblemSetList,
  ProblemSetTitle,
  ProblemSetInfo,
  ProblemSetItem,
  ProblemSideList,
  ProblemSideItem,
  ProblemSideItemContent,
  SubmitButton,
} from "@pages/ExamPaper/styles";

import React, { useCallback, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Problem from "@components/Problem";

import useGetExamPaperInfo from "@hooks/GetData/useGetExamPaperList";

const ExamPaper = () => {
  const { examPaperListId } = useParams();

  const { data: infoData } = useGetExamPaperInfo(examPaperListId);

  const navigate = useNavigate();

  const [userAnswer, setUserAnswer] = useState({});

  const onClickProblem = useCallback(
    (problemId, index) => {
      setUserAnswer((preAnswer) => ({
        ...preAnswer,
        [problemId]: index + 1,
      }));
    },
    [setUserAnswer]
  );

  const onClickExamSubmit = useCallback(async () => {
    try {
      const result = await axios.post(
        `/api/examPaper/${examPaperListId}/examResult`,
        { userAnswer }
      );
      console.log(result);
      toast.success("채점이 완료되었습니다.");
      navigate(`/examPaper/${examPaperListId}/examResult`);
    } catch (error) {
      toast.error(error);
      console.error(error);
    }
  }, [userAnswer]);

  console.log(userAnswer);
  return (
    <>
      <Header>
        <ToastContainer autoClose={1000} />
        <h1>MY_EXAM</h1>
        <SubmitButton onClick={onClickExamSubmit}> 제출하기 </SubmitButton>
      </Header>
      <AppContainer>
        <ProblemSetList>
          <ProblemSetItem>
            <ProblemSetTitle>
              {infoData ? `${infoData[0].title} - ${infoData[1].title} ` : " "}
            </ProblemSetTitle>
            <ProblemSetInfo>content</ProblemSetInfo>
          </ProblemSetItem>
        </ProblemSetList>
        <Problem
          examPaperListId={examPaperListId}
          onClickProblem={onClickProblem}
          userAnswer={userAnswer}
        />
        <ProblemSideList>
          {/* 4. 원하는 문제에 빨리 접근할 수도 있죠! */}
          <ProblemSideItem>
            <ProblemSideItemContent>
              {/* Replace with actual problem content preview */}
              양수 a에 대하여 구간에서 정의된 함수 f(x)가...
            </ProblemSideItemContent>
          </ProblemSideItem>
          {/* ... other problem previews ... */}
        </ProblemSideList>
      </AppContainer>
    </>
  );
};

export default ExamPaper;
