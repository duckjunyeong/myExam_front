import React, { useCallback, useState } from "react";
import {
  Container,
  Header,
  ChangelogTitle,
  UserDropdown,
  AddPostButton,
  AddPostIcon,
  AddPostText,
  PostItem,
  PostContent,
  PostMeta,
  LikeIcon,
  LikeCount,
  PostTitle,
  NewFeatureLabel,
  PostDate,
  CommentCount,
  EditorSettingsContent,
  EditorSettingsTitle,
  EditorSettingsSection,
  ButtonContainer,
  DeleteButton,
  EditButton,
  CommentIcon,
  Logo,
} from "@pages/ModifyExamPaper/styles";
import useInput from "hooks/useInput";
import { useParams } from "react-router";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import CreateExamPaper from "@pages/CreateExamPaper/styles";
import CreateProblem from "@components/CreateProblem";
import ModifyExamProblem from "@components/ModifyExamProblem";
import axios from "axios";

const ModifyExamPaper = () => {
  const { examPaperListId } = useParams();
  const { data, error, mutate } = useSWR(
    `/api/examPaper/${examPaperListId}/modify`,
    fetcher
  );
  const [title, onChangeTitle] = useInput("");
  const [correct, onChangeCorrect] = useInput("");
  const [choices, onChangeChoices] = useInput(["", "", "", "", ""]);
  const [IsCreateModalOn, setIsCreateModalOn] = useState(false);
  const [IsEditModalOn, setIsEditModalOn] = useState(false);
  const [curSelectedProblem, setCurSelectedProblem] = useState(null);

  const closeCreateModal = useCallback(() => {
    setIsCreateModalOn(false);
  }, []);

  const closeEditModalOn = useCallback(() => {
    setIsEditModalOn(false);
  }, []);

  const onOpen = useCallback(() => {
    setIsCreateModalOn(true);
  });

  const onClickEditExamProblem = useCallback((index) => {
    setIsEditModalOn(true);
    setCurSelectedProblem(index);
  }, []);

  const onClickDeleteProblem = useCallback(async (id) => {
    try {
      await axios.delete(`/api/examProblem/${id}/delete`).then(() => mutate());
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <Container>
      <Header>
        <Logo />
        <ChangelogTitle>Changelog</ChangelogTitle>
        <UserDropdown>Dawid Liberadzki</UserDropdown>
      </Header>
      <AddPostButton>
        <AddPostIcon>+</AddPostIcon>
        <AddPostText onClick={onOpen}>Add a new post</AddPostText>
      </AddPostButton>
      {data && data.length > 0 ? (
        data.map((data, index) => {
          return (
            <PostItem>
              <PostDate>
                {new Date(data.updatedAt).toLocaleString("ko-KR")}
              </PostDate>
              <PostTitle>
                {index + 1}번. {data.title}
                <NewFeatureLabel>NEW FEATURE</NewFeatureLabel>
              </PostTitle>
              <PostContent>content</PostContent>
              <PostMeta>
                <LikeIcon />
                <LikeCount>13</LikeCount>
                <CommentIcon />
                <CommentCount>290</CommentCount>
              </PostMeta>
              <ButtonContainer>
                <EditButton
                  onClick={() => {
                    onClickEditExamProblem(index);
                  }}
                >
                  Edit
                </EditButton>
                <DeleteButton
                  onClick={() => {
                    onClickDeleteProblem(data.id);
                  }}
                >
                  Delete
                </DeleteButton>
              </ButtonContainer>
            </PostItem>
          );
        })
      ) : (
        <div>no data</div>
      )}

      {IsCreateModalOn && (
        <CreateProblem
          closeCreateModal={closeCreateModal}
          examPaperListId={examPaperListId}
        ></CreateProblem>
      )}

      {IsEditModalOn && (
        <ModifyExamProblem
          closeEditModalOn={closeEditModalOn}
          problem={data[curSelectedProblem]}
          examPaperListId={examPaperListId}
        />
      )}
    </Container>
  );
};

export default ModifyExamPaper;
