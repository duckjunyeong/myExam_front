import React from "react";
import {
  ProblemContent,
  ProblemTitle,
  ChoiceWrapper,
  ChoiceButton,
  ChoiceText,
} from "@components/ProblemResult/styles";
import { useParams } from "react-router";
import useGetExamPaper from "@hooks/GetData/useGetExamPaper";

const ProblemResult = ({ examResult }) => {
  const { examPaperListId } = useParams();
  const {
    data: problemData,
    error: problemError,
    mutate: problemMutate,
  } = useGetExamPaper(examPaperListId);

  const arredExamResult = JSON.parse(examResult.title);
  const userAnswer = arredExamResult.answer;

  if (!problemData || !examResult) {
    return <div>loading</div>;
  }

  return problemData ? (
    problemData.map((problem) => {
      return (
        <ProblemContent
          correct={parseInt(problem.correct) === userAnswer[problem.id]}
        >
          <ProblemTitle>{problem.title}</ProblemTitle>
          {JSON.parse(problem.choice).map((choice, index) => {
            return (
              <ChoiceWrapper key={index}>
                <ChoiceButton
                  id={`problem-${problem.id}-choice-${index}`}
                  name={`problem-${problem.id}`}
                  isSelected={index + 1 === userAnswer[problem.id]}
                  correct={
                    parseInt(problem.correct) === index + 1 &&
                    parseInt(problem.correct) !== userAnswer[problem.id]
                  }
                />
                <ChoiceText>
                  {index + 1}. {choice}
                </ChoiceText>
              </ChoiceWrapper>
            );
          })}
        </ProblemContent>
      );
    })
  ) : (
    <div>no data</div>
  );
};

export default React.memo(ProblemResult);
