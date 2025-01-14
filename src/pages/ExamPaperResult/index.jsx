import {
  Header,
  AppContainer,
  ProblemSetList,
  ProblemSetTitle,
  ProblemSetInfo,
  ProblemSetItem,
  ProblemSideList,
  ProblemSideItem,
  ProblemsContainer,
  ResultList,
  ResultItem,
  ScoreDisplay,
} from "@pages/ExamPaper/styles";

import React, { useCallback, useMemo, useState } from "react";
import { Link, useParams } from "react-router";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProblemResult from "@components/ProblemResult";

import useGetExamPaperInfo from "@hooks/GetData/useGetExamPaperList";
import useGetExamResult from "@hooks/GetData/useGetExamResult";

const ExamPaperResult = () => {
  const { examPaperListId } = useParams();

  const { data: examPaperInfo } = useGetExamPaperInfo(examPaperListId);
  const { data: resultData } = useGetExamResult(examPaperListId);

  const [curExamResult, setCurExamResult] = useState(0);

  const score = useMemo(() => {
    if (resultData && resultData[curExamResult]) {
      return JSON.parse(resultData[curExamResult].title).score;
    }
    return 0;
  }, [curExamResult, resultData]);

  const handleClickResult = useCallback((index) => {
    setCurExamResult(index);
  }, []);

  if (!resultData || !examPaperInfo) {
    return <div>looading...</div>;
  }

  return (
    <>
      <Header>
        <ToastContainer autoClose={1000} />
        <h1>MY_EXAM</h1>
        <Link to={"/main"}> Home </Link>
      </Header>
      <AppContainer>
        <ProblemSetList>
          <ProblemSetItem>
            <ProblemSetTitle>
              {`${examPaperInfo[0].title} - ${examPaperInfo[1].title}`}
            </ProblemSetTitle>

            <ProblemSetInfo>content</ProblemSetInfo>
          </ProblemSetItem>
          <ResultList>
            {resultData.map((result, index) => (
              <ResultItem
                key={index}
                onClick={() => handleClickResult(index)}
                isSelected={curExamResult === index}
              >
                제출 시간: {new Date(result.createdAt).toLocaleString()}
              </ResultItem>
            ))}
          </ResultList>
        </ProblemSetList>

        <ProblemsContainer>
          <ProblemResult examResult={resultData[curExamResult]} />
        </ProblemsContainer>

        <ProblemSideList>
          <ProblemSideItem>
            <ScoreDisplay>
              점수: {`${score} / ${resultData.length}`}
            </ScoreDisplay>
          </ProblemSideItem>
        </ProblemSideList>
      </AppContainer>
    </>
  );
};

export default ExamPaperResult;
