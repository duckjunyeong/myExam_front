import styled from "@emotion/styled";

export const CalendarContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid #ccc;
  font-family: Arial, sans-serif;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
`;

export const CalendarTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const CalendarBody = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const CalendarWeek = styled.tr``;

export const CalendarDay = styled.td`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) =>
    props.isLastday ? "rgba(128, 128, 128, 0.01)" : "white"};
  height: 30px;

  &:hover {
    background-color: ${(props) => (props.isLastday ? null : "#f5f5f5")};
  }
`;

export const CalendarDayLabel = styled.span`
  font-size: 1rem;
`;

export const PrevButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const NextButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;
