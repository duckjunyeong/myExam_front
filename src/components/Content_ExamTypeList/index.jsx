import {
  SearchBar,
  UserInfo,
  FormContainer,
  InputContainer,
  StyledInput,
  SubmitButton,
  AddExamButton,
} from "./styles";
import { useRef, useState, useCallback, useMemo } from "react";
import useSWR from "swr";
import axios from "axios";

import fetcher from "@utils/fetcher";
import useInput from "@hooks/useInput";
import ExamTypeList from "@components/ExamTypeList";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Content_ExamTypeList = () => {
  const { data, error, mutate } = useSWR("/api/user", fetcher);
  const [showInput, setShowInput] = useState(false);
  const [newTypeName, onChangeNewTypeName, setNewTypeName] = useInput("");
  const examTypeList = useMemo(() => data?.ExamTypeLists, [data]);
  const newTypeNameRef = useRef();

  const onClickAddNewType = useCallback(() => {
    setShowInput(!showInput);
    if (!showInput) {
      newTypeNameRef.current.focus();
    }
  }, [showInput]);

  const onSubmitNewType = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const newExamType = await axios.post("/api/main/createExamType", {
          newTypeName,
        });
        mutate();
        toast.info("시험지 유형이 추가되었습니다.");
        setNewTypeName("");
      } catch (error) {
        toast.error(error.response.data);
        console.error(error.response);
        setNewTypeName("");
        newTypeNameRef.current.focus();
      }
    },
    [newTypeName, data]
  );

  return (
    <>
      <SearchBar>
        <input type="text" placeholder="Search" />
      </SearchBar>
      <UserInfo>
        <div className="notifications"></div>
        <div className="user-name">Exam Type</div>
      </UserInfo>

      <AddExamButton onClick={onClickAddNewType}>
        {showInput ? "Close" : "Add New Type"}
      </AddExamButton>
      <InputContainer>
        <form onSubmit={onSubmitNewType}>
          <FormContainer>
            <InputContainer>
              <StyledInput
                value={newTypeName}
                onChange={onChangeNewTypeName}
                type="text"
                placeholder="Type"
                show={showInput}
                ref={newTypeNameRef}
              />
              <SubmitButton type="submit" show={showInput}>
                Submit
              </SubmitButton>
            </InputContainer>
          </FormContainer>
        </form>
      </InputContainer>
      {examTypeList?.length > 0 ? (
        <ExamTypeList examTypeList={examTypeList} />
      ) : (
        <div>no data</div>
      )}
    </>
  );
};

export default Content_ExamTypeList;
