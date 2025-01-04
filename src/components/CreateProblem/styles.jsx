import styled from "@emotion/styled";

// 모달 컨테이너
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // 반투명 배경
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; // 다른 요소 위에 위치
`;

// 모달 윈도우
export const ModalWindow = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  width: 400px;
`;

// 모달 제목
export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #222;
`;

// 입력 필드 컨테이너
export const InputContainer = styled.div`
  margin-bottom: 15px;
`;

// 레이블
export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
`;

// 입력 필드 (제목, 정답)
export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
  box-sizing: border-box;
`;

// 선택지 입력 필드 컨테이너
export const ChoiceInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

// 선택지 번호
export const ChoiceNumber = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
  color: #555;
`;

// 선택지 입력 필드
export const ChoiceInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
`;

// 버튼 컨테이너
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

// 저장 버튼
export const SaveButton = styled.button`
  background-color: #67daff;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #47b8e0;
  }
`;

// 취소 버튼
export const CancelButton = styled.button`
  background-color: #eee;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-size: 14px;
  color: #555;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;
