import React, { memo } from "react";
import {
  ProblemsContainer,
  ProblemContent,
  ProblemTitle,
  ChoiceWrapper,
  ChoiceButton,
  ChoiceText,
} from "./styles";

import useGetExamPaper from "@hooks/GetData/useGetExamPaper";

const Problem = memo(({ examPaperListId, onClickProblem, userAnswer }) => {
  const { data: problemData } = useGetExamPaper(examPaperListId);
  return (
    <ProblemsContainer>
      {problemData ? (
        problemData.map((problem) => {
          return (
            <ProblemContent>
              <ProblemTitle>{problem.title}</ProblemTitle>
              {JSON.parse(problem.choice).map((choice, index) => {
                return (
                  <ChoiceWrapper key={index}>
                    <ChoiceButton
                      id={`problem-${problem.id}-choice-${index}`}
                      name={`problem-${problem.id}`}
                      isSelected={userAnswer[problem.id] - 1 === index}
                      onClick={() => onClickProblem(problem.id, index)}
                    />
                    <ChoiceText
                      htmlFor={`problem-${problem.id}-choice-${index}`}
                    >
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
      )}
    </ProblemsContainer>
  );
});

export default Problem;
