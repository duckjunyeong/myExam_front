import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  ModalContainer,
  ModalWindow,
  CompanyLogo,
  WelcomeMessage,
  AppGrid,
  AppBox,
  AppIcon,
  AppName,
  AppDescription,
  Copyright,
  CreateExamPaperButton,
  StyledLink,
} from "@components/ExamPaperList/styles";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import { Link } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExamPaperList = ({ closeModal, examType }) => {
  const navigate = useNavigate();

  const { data, error, mutate } = useSWR(
    `api/examPaperList/${examType.id}`,
    fetcher
  );

  const onClickDeleteExamPaper = useCallback(
    async (id) => {
      try {
        await axios.delete(`/api/examPaper/${id}/delete`);
        toast.success("시험지가 삭제되었습니다.");
        mutate(); // Refresh the exam paper list
      } catch (error) {
        console.error(error);
        toast.error("시험지 삭제에 실패했습니다.");
      }
    },
    [mutate, toast]
  );

  return (
    <ModalContainer onClick={closeModal}>
      <ModalWindow onClick={(event) => event.stopPropagation()}>
        <CompanyLogo>
          <span>articulate 360</span>
          <div>
            <StyledLink to={`/main/examPaperList/${examType.id}/create`}>
              Create ExamPaper
            </StyledLink>
          </div>
        </CompanyLogo>
        <WelcomeMessage>{examType.title}</WelcomeMessage>
        {data && data.length > 0 ? (
          data.map((data) => {
            return (
              <AppGrid>
                <AppBox>
                  <AppIcon color="#e67e22">
                    <span>rs</span>
                  </AppIcon>
                  <AppName>{data.title}</AppName>
                  <Link to={`/main/examPaper/${data.id}/modify`}>수정</Link>
                  <button onClick={() => navigate(`/examPaper/${data.id}`)}>
                    시험
                  </button>
                  <button>결과</button>
                  <button
                    onClick={() => {
                      onClickDeleteExamPaper(data.id);
                    }}
                  >
                    삭제
                  </button>
                </AppBox>
              </AppGrid>
            );
          })
        ) : (
          <div>no data</div>
        )}

        <Copyright>
          © 2016 Articulate Global, Inc. <a href="#">Legal</a>{" "}
          <a href="#">Support</a>
        </Copyright>
      </ModalWindow>
    </ModalContainer>
  );
};

export default ExamPaperList;
