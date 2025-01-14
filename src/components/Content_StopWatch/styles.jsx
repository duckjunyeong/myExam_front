import styled from "@emotion/styled"; // emotion-styled 사용

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  background-color: #282c34; /* 어두운 파란색 배경 */
  min-height: 92vh;
  color: white;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Icon = styled.i`
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 80px;
  margin-bottom: 40px;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #f5f5f5;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.4);
`;

export const TimeDisplay = styled.div`
  font-size: 4rem;
  font-weight: 300;
  color: #f5f5f5;
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 5px;
  line-height: 1.2;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.4);
`;

export const Label = styled.span`
  font-size: 1rem;
  color: #ddd;
  text-transform: uppercase;
  margin: 0 5px;
`;

export const Button = styled.button`
  background-color: #f5f5f5;
  color: #282c34;
  border: none;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2rem;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 50px; /* 타원형 버튼 */
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease-in-out;
  position: absolute;
  bottom: 40px;

  &:hover {
    background-color: #ddd;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #ccc;
    cursor: default;
  }
`;
