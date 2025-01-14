import styled from "@emotion/styled";

export const ProblemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 20px;
  padding: 20px;
`;

export const ChoiceText = styled.label`
  font-size: 16px;
  color: #212529;
  cursor: pointer;
  margin-left: 17px;
`;

export const ChoiceWrapper = styled.div`
  display: flex;
  align-items: center; // 버튼과 텍스트를 세로 중앙 정렬
  margin-bottom: 12px;
`;
export const ChoiceButton = styled.button`
  background-color: ${(props) =>
    props.isSelected ? "skyblue" : props.correct ? "red" : "white"};
  border: 1px solid black;
  width: 15px; /* 가로 길이 설정 */
  height: 15px; /* 세로 길이 설정 (가로 길이와 동일하게) */
  padding: 0; /* 내부 여백 제거 (텍스트 중앙 정렬을 위해) */
  cursor: pointer;
  border-radius: 50%; /* 완벽한 원형 */
  display: flex; /* 텍스트 중앙 정렬을 위한 flexbox */
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
  font-size: 14px; /* 글자 크기 조정 
  margin-right: 100px;


  &:hover {
    background-color: lightgray;
  }
`;

export const ProblemTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #007bff;
`;

export const ProblemContent = styled.div`
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => (props.correct ? "#e8f8e9" : "#ffe6eb")};
`;
