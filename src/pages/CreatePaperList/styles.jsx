import styled from "@emotion/styled";

// 전체 컨테이너
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #f8f9fa; // 연한 회색 배경
  font-family: sans-serif;
`;

// 로그인 폼 박스
export const FormBox = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  width: 320px;
`;

// 로고
export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: #222; // 짙은 회색 로고
`;

// 이메일 입력 필드
export const EmailInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
  margin-bottom: 10px;
  box-sizing: border-box; // 패딩과 테두리를 너비에 포함
`;

// 이메일 로그인 버튼
export const EmailButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #67daff; // 이미지와 유사한 파란색
  border: none;
  border-radius: 3px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #47b8e0;
  }
`;
