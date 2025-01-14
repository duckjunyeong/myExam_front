import React, { useCallback } from "react";
import {
  Container,
  FormBox,
  EmailInput,
  EmailButton,
  Logo,
} from "@pages/CreatePaperList/styles";
import { useNavigate, useParams } from "react-router";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import useInput from "hooks/useInput";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreatePaperList = () => {
  const navigate = useNavigate();
  const { examTypeId } = useParams();
  const { data, error, mutate } = useSWR(
    `/api/examTypeList/${examTypeId}`,
    fetcher
  );
  const [newExamPaperName, onChangeNewExamPaperName, setNewExamPaperName] =
    useInput("");
  const onSumbitNewExamPaperName = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const examPaperList = await axios.post(
          `/api/examPaperList/${examTypeId}/create`,
          {
            newExamPaperName,
          }
        );
        navigate(`/main/examPaper/${examPaperList.data.id}/modify`);
      } catch (error) {
        toast.error(error.response.data);
        console.error(error);
        setNewExamPaperName("");
      }
    },
    [newExamPaperName, examTypeId]
  );
  return (
    <Container>
      <ToastContainer />
      <FormBox>
        <Logo>{data?.title}</Logo>
        <EmailInput
          type="text"
          placeholder="Write ExamPaper Name"
          value={newExamPaperName}
          onChange={onChangeNewExamPaperName}
        />
        <EmailButton onClick={onSumbitNewExamPaperName}>Next</EmailButton>
      </FormBox>
    </Container>
  );
};
export default CreatePaperList;
