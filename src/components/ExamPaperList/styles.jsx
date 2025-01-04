import styled from "@emotion/styled";
import { Link } from "react-router";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.05); // 반투명 배경
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; // 다른 요소 위에 위치
`;

// 모달 윈도우
export const ModalWindow = styled.div`
  background-color: #e5f4fe;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.03);
  width: 700px;
  font-family: sans-serif;
  max-height: 80vh;
  overflow-y: auto;
  onclick: (event) => event.stopPropagation();
`;

// 닫기 버튼 (우측 상단)
export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
`;

// 회사 로고
export const CompanyLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #666;
  margin-bottom: 30px;

  span {
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    button {
      background-color: #fff;
      border: none;
      border-radius: 5px;
      padding: 5px 10px;
      font-size: 12px;
      color: #666;
      cursor: pointer;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
`;

// 환영 메시지
export const WelcomeMessage = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
`;

// 앱 그리드 컨테이너
export const AppGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

// 앱 박스
export const AppBox = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  }
`;

// 앱 아이콘
export const AppIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #fff;
  margin-bottom: 10px;

  span {
    font-size: 14px;
    font-weight: bold;
  }
`;

// 앱 이름
export const AppName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
`;

// 앱 설명
export const AppDescription = styled.p`
  font-size: 12px;
  color: #666;
  text-align: center;
`;

// 저작권 정보
export const Copyright = styled.p`
  font-size: 10px;
  color: #666;
  text-align: center;

  a {
    color: #666;
    text-decoration: none;
  }
`;

export const CreateExamPaperButton = styled.div`
  background-color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 12px;
  color: #666;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  /* 마우스 hover 효과 추가 */
  &:hover {
    background-color: #f0f0f0; // 연한 회색으로 변경
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2); // 그림자 강조
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black; // 원하는 색상 지정
  background-color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 12px;
  color: #666;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  /* 마우스 hover 효과 추가 */
  &:hover {
    background-color: #f0f0f0; // 연한 회색으로 변경
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2); // 그림자 강조
  }
`;
