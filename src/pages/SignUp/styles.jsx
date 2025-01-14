import styled from "@emotion/styled";

// 기존 Login 컴포넌트 스타일 재사용
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f8f9fa;
`;

// SignupForm으로 이름 변경
export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 30px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #495057;
  margin-bottom: 10px;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #868e96;
  margin-bottom: 20px;
  text-align: center;
`;

export const Error = styled.p`
  font-size: 14px;
  color: #ff2c2c;
  margin-bottom: 20px;
  text-align: center;
`;
export const InputLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #495057;
  margin-bottom: 5px;
  svg {
    margin-right: 10px;
    color: #868e96;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 16px;
  color: #495057;
  &:focus {
    outline: none;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

// Signup 버튼 스타일 (기존 Button 스타일 수정)
export const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 5px;
  background-color: #007bff; // Signup 버튼 색상 변경
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #0069d9; // Signup 버튼 호버 색상 변경
  }
`;

// LoginLink로 이름 변경
export const LoginLink = styled.p`
  font-size: 14px;
  color: #868e96;
  margin-top: 15px;
  text-align: center;
  a {
    color: #007bff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
