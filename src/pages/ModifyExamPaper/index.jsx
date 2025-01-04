import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router";
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
  ButtonContainer,
  DeleteButton,
  EditButton,
  CommentIcon,
  Logo,
  BackButton,
  BackIcon,
} from "@pages/ModifyExamPaper/styles";
import useInput from "hooks/useInput";
import { useParams } from "react-router";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import CreateProblem from "@components/CreateProblem";
import ModifyExamProblem from "@components/ModifyExamProblem";
import axios from "axios";

const ModifyExamPaper = () => {
  const navigate = useNavigate();
  const { examPaperListId } = useParams();
  const { data, error, mutate } = useSWR(
    `/api/examPaper/${examPaperListId}/modify`,
    fetcher
  );
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
  }, []);

  const onClickEditExamProblem = useCallback((index) => {
    setIsEditModalOn(true);
    setCurSelectedProblem(index);
  }, []);

  const onClickDeleteProblem = useCallback(
    async (id) => {
      try {
        await axios
          .delete(`/api/examProblem/${id}/delete`)
          .then(() => mutate());
      } catch (error) {
        console.error("Error deleting problem:", error);
        // Optionally display an error message to the user
      }
    },
    [mutate]
  );

  if (error) {
    return <div>Failed to load exam papers</div>;
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <BackIcon />
        </BackButton>
        <Logo />
        <ChangelogTitle>Changelog</ChangelogTitle>
        <button onClick={() => navigate("/main")}>메인으로 이동</button>
        <UserDropdown>Dawid Liberadzki</UserDropdown>
      </Header>
      <AddPostButton>
        <AddPostIcon>+</AddPostIcon>
        <AddPostText onClick={onOpen}>Add a new post</AddPostText>
      </AddPostButton>
      {data && data.length > 0 ? (
        data.map((data, index) => {
          return (
            <PostItem key={data.id}>
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
        />
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
