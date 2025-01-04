import React, { useCallback, useState } from "react";
import {
  ModalContainer,
  ModalWindow,
  ModalTitle,
  InputContainer,
  Label,
  InputField,
  ChoiceInputContainer,
  ChoiceNumber,
  ChoiceInput,
  ButtonContainer,
  SaveButton,
  CancelButton,
} from "components/CreateProblem/styles";
import useInput from "hooks/useInput";
import axios from "axios";
import { mutate } from "swr";

const ModifyExamProblem = ({ problem, examPaperListId, closeEditModalOn }) => {
  const [title, onChangeTitle, setTitle] = useInput(problem.title);
  const [answer, onChangeAnswer, setAnswer] = useInput(problem.correct);
  const [choices, setChoices] = useState(JSON.parse(problem.choice));

  const handleChoiceChange = useCallback(
    (index, value) => {
      const preChoices = [...choices];
      preChoices[index] = value;
      setChoices(preChoices);
    },
    [choices]
  );

  const handleSave = useCallback(async () => {
    try {
      await axios.put(`/api/examPaper/${problem.id}`, {
        title,
        answer,
        choices,
      });
      mutate(`/api/examPaper/${examPaperListId}/modify`);
    } catch (error) {
      console.error(error);
    }
  }, [title, answer, choices, problem?.id, examPaperListId]);

  return (
    <ModalContainer onClick={closeEditModalOn}>
      <ModalWindow onClick={(e) => e.stopPropagation()}>
        <ModalTitle>문제 수정</ModalTitle>
        <InputContainer>
          <Label htmlFor="title">제목</Label>
          <InputField
            type="text"
            id="title"
            value={title}
            onChange={onChangeTitle}
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="answer">정답</Label>
          <InputField
            type="text"
            id="answer"
            value={answer}
            onChange={onChangeAnswer}
          />
        </InputContainer>
        <InputContainer>
          <Label>선지</Label>
          {choices.map((choice, index) => (
            <ChoiceInputContainer key={index}>
              <ChoiceNumber>{index + 1}.</ChoiceNumber>
              <ChoiceInput
                type="text"
                value={choice}
                onChange={(e) => handleChoiceChange(index, e.target.value)}
              />
            </ChoiceInputContainer>
          ))}
        </InputContainer>
        <ButtonContainer>
          <CancelButton onClick={closeEditModalOn}>취소</CancelButton>
          <SaveButton onClick={handleSave}>저장</SaveButton>
        </ButtonContainer>
      </ModalWindow>
    </ModalContainer>
  );
};

export default ModifyExamProblem;
