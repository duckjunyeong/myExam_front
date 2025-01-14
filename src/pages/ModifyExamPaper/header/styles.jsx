import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  padding: 10px 0;
`;

export const ChangelogTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const BackIcon = styled.span`
  font-size: 20px;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;
