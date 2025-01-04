import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Section = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
  cursor: pointer; /* 마우스 오버 시 커서 변경 */
  transition: background-color 0.3s ease; /* 부드러운 배경색 전환 효과 */

  &:hover {
    background-color: #e0e0e0; /* 마우스 오버 시 배경색 변경 */
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  span:nth-child(1) {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #3498db;
    margin-right: 10px;
  }

  span:nth-child(2) {
    font-size: 14px;
    font-weight: bold;
    color: #333;
    margin-right: auto;
  }

  span:nth-child(3) {
    font-size: 12px;
    color: #7f8c8d;
  }
`;

export const SectionContent = styled.div`
  p:first-of-type {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  p:last-of-type {
    font-size: 14px;
    color: #7f8c8d;
  }
`;
