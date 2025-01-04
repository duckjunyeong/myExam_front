import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
// --- Styled Components ---

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #2c3e50;
  color: #ecf0f1;
  font-family: "Arial", sans-serif;
`;

export const Sidebar = styled.aside`
  width: 250px;
  background-color: #34495e;
  padding: 20px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  span {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const AddFeatureButton = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #2980b9;
  }

  svg {
    margin-right: 8px;
  }
`;

export const AddExamButton = styled.button`
  background-color: #ffaaaa; /* 연한 빨간색 */
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  width: 10%; /* 가로 길이를 절반으로 설정 */
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ff7f7f; /* 마우스 오버 시 약간 더 진한 빨간색 */
  }

  svg {
    margin-right: 8px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px; /* 버튼과의 간격 */
`;

export const SubmitButton = styled.button`
  background-color: #2ecc71;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
  animation: ${(props) => (props.show ? fadeIn : fadeOut)} 0.3s ease-out
    forwards;
  &:hover {
    background-color: #27ae60;
  }
`;

const slideIn = keyframes`
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 200px; /* Input 창의 최종 너비 */
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    width: 200px; /* Input 창의 최종 너비 */
    opacity: 1;
  }
  to {
    width: 0;
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const StyledInput = styled.input`
  width: 200px;
  opacity: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  animation: ${(props) => (props.show ? slideIn : slideOut)} 0.3s ease-out
    forwards;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden; /* 애니메이션 중 내용 숨김 */
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 5px;

  &.active {
    background-color: #2980b9;
  }

  &:hover {
    background-color: #41586e;
  }

  svg {
    margin-right: 10px;
  }

  span {
    font-size: 16px;
  }

  .count {
    margin-left: auto;
    background-color: #e74c3c;
    color: #fff;
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 14px;
  }

  &.active .count {
    background-color: #fff;
    color: #e74c3c;
  }
`;

export const BottomMenu = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
`;

export const Settings = styled.div`
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Categories = styled.div`
  cursor: pointer;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Content = styled.main`
  flex-grow: 1;
  padding: 20px;
  background-color: #ecf0f1;
  color: #333;
  overflow-y: auto;
`;

export const SearchBar = styled.div`
  display: flex;
  margin-bottom: 20px;

  input {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
    font-size: 16px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  .notifications {
    width: 24px;
    height: 24px;
    background-color: #e74c3c;
    border-radius: 50%;
    margin-right: 15px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 4px;
      right: 4px;
      width: 8px;
      height: 8px;
      background-color: #fff;
      border-radius: 50%;
    }
  }

  .user-name {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const RightSidebar = styled.aside`
  width: 300px;
  background-color: #fff;
  color: #333;
  padding: 20px;
`;

export const Date = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ArticleTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ArticleContent = styled.div`
  font-size: 14px;
  line-height: 1.5;

  p {
    margin-bottom: 10px;
  }

  .add-comment {
    color: #3498db;
    cursor: pointer;
    margin-top: 15px;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
