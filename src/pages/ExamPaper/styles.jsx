import styled from "@emotion/styled";

// 1. 내가 고른 문제집이에요.
export const ProblemSetList = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #f8f9fa;
  border-right: 1px solid #dee2e6;
  height: 100%;
`;

export const ProblemSetItem = styled.div`
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const ProblemSetTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #212529;
`;

export const ProblemSetInfo = styled.p`
  font-size: 14px;
  color: #495057;
  margin-bottom: 0;
`;

export const ProblemImage = styled.img`
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
  border: 1px solid #ced4da;
  border-radius: 4px;
`;

// 4. 원하는 문제에 빨리 접근할 수도 있죠!
export const ProblemSideList = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #f0f0f8;
  border-left: 1px solid #dee2e6;
  overflow-y: auto;
  height: 100%;
`;

export const ProblemSideItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e9ecef;
  }
`;

export const ProblemSideItemContent = styled.div`
  font-size: 14px;
  color: #495057;
`;

// 5. 문제에 댓글을 남길수도 있죠!
export const CommentSection = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  resize: vertical;
`;

export const CommentButton = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
`;

export const AppContainer = styled.div`
  display: flex;
  height: 100vh; // 높이는 100vh로 유지
`;

export const Header = styled.header`
  background-color: #fff;
  padding: 10px 20px;
  border-bottom: 1px solid #dee2e6;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const ChoiceButton = styled.button`
  background-color: ${(props) => (props.isSelected ? "skyblue" : "white")};
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

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #0069d9;
  }
`;

export const ResultList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;

export const ResultItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "#f5f5f5" : "white")};

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const ScoreDisplay = styled.div`
  padding: 10px 20px;
  margin-bottom: 20px; // ExamProblem과의 간격
  border: 1px solid #007bff; // 파란색 테두리
  border-radius: 4px;
  background-color: #f0f8ff; // 옅은 파란색 배경
  font-size: 18px;
  font-weight: bold;
  color: #007bff; // 파란색 텍스트
  text-align: center; // 텍스트 중앙 정렬
`;

export const ProblemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 20px;
  padding: 20px;
`;
