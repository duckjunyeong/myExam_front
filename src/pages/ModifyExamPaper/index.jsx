import {
  Container,
  AddPostButton,
  AddPostIcon,
  AddPostText,
} from "@pages/ModifyExamPaper/styles";

import React, { useCallback, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

import CreateProblem from "@components/CreateProblem";
import ModifyExamProblem from "@components/ModifyExamProblem";

import useModal from "@hooks/useModal";
import useGetExamPaper from "@hooks/GetData/useGetExamPaper";
import useGetExamPaperInfo from "@hooks/GetData/useGetExamPaperList";

import ModifyExamPaperHeader from "./header";
import ModifyExamPaperBody from "./body";

const ModifyExamPaper = () => {
  const navigate = useNavigate();
  const { examPaperListId } = useParams();

  const {
    data: examPaper,
    error: examPaperError,
    mutate: examPaperMutate,
  } = useGetExamPaper(examPaperListId);

  const { data: examPaperInfo } = useGetExamPaperInfo(examPaperListId);

  const [curSelectedProblem, setCurSelectedProblem] = useState(null);

  const {
    isModalOpen: isCreateModal,
    openModal: openCreateModal,
    closeModal: closeCreateModal,
  } = useModal();
  const {
    isModalOpen: isEditModal,
    openModal: openEditModal,
    closeModal: closeEditModal,
  } = useModal();

  const onClickEditExamProblem = useCallback((index) => {
    openEditModal();
    setCurSelectedProblem(index);
  }, []);

  const onClickDeleteProblem = useCallback(
    async (id) => {
      try {
        await axios
          .delete(`/api/examProblem/${id}/delete`)
          .then(() => examPaperMutate());
      } catch (error) {
        console.error("Error deleting problem:", error);
      }
    },
    [examPaperMutate]
  );

  return (
    <Container>
      <ModifyExamPaperHeader
        examPaperInfo={examPaperInfo}
        navigate={navigate}
      />
      <AddPostButton>
        <AddPostIcon>+</AddPostIcon>
        <AddPostText onClick={openCreateModal}>Add a new post</AddPostText>
      </AddPostButton>

      <ModifyExamPaperBody
        examPaperListId={examPaperListId}
        onClickEditExamProblem={onClickEditExamProblem}
        onClickDeleteProblem={onClickDeleteProblem}
      />

      {isCreateModal && (
        <CreateProblem
          closeCreateModal={closeCreateModal}
          examPaperListId={examPaperListId}
        />
      )}

      {isEditModal && (
        <ModifyExamProblem
          closeEditModalOn={closeEditModal}
          problem={examPaper[curSelectedProblem]}
          examPaperListId={examPaperListId}
        />
      )}
    </Container>
  );
};

export default ModifyExamPaper;
