import React, { Children, useCallback, useState } from "react";
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
import { mutate } from "swr";
import { preconnect } from "react-dom";
import axios from "axios";

const CreateProblem = ({ closeCreateModal, examPaperListId }) => {
  const [title, onChangeTitle, setTitle] = useInput("");
  const [answer, onChangeAnswer, setAnswer] = useInput("");
  const [choices, setChoices] = useState(["", "", "", "", ""]);

  const handleChoiceChange = useCallback(
    (index, value) => {
      const preChoices = [...choices];
      preChoices[index] = value;
      setChoices(preChoices);
    },
    [choices]
  );

  const resetInput = useCallback(() => {
    setTitle("");
    setAnswer("");
    setChoices(["", "", "", "", ""]);
  }, []);

  const handleSave = useCallback(async () => {
    try {
      await axios.post(`/api/examPaper/${examPaperListId}/create`, {
        title,
        answer,
        choices,
      });
      resetInput();
      mutate(`/api/examPaper/${examPaperListId}/modify`);
    } catch (error) {
      console.error(error);
      alert("문제 생성에 실패했습니다.");
    }
  }, [title, answer, choices, examPaperListId, mutate, resetInput]);

  return (
    <ModalContainer onClick={closeCreateModal}>
      <ModalWindow onClick={(e) => e.stopPropagation()}>
        <ModalTitle>문제 생성</ModalTitle>
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
          <CancelButton onClick={closeCreateModal}>취소</CancelButton>
          <SaveButton onClick={handleSave}>저장</SaveButton>
        </ButtonContainer>
      </ModalWindow>
    </ModalContainer>
  );
};

export default CreateProblem;
