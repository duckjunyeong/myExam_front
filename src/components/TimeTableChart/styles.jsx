import styled from "@emotion/styled";

export const ChartContainer = styled.div`
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center; /* 가로 중앙 정렬 */
  font-family: sans-serif;
  width: 100%;
`;

//export const ChartContainer = styled.div`
//  width: 300px;
//  height: 300px;
//`;
// 데이터 표시를 위한 스타일드 컴포넌트
export const DataList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px; /* 차트와의 간격 */
`;

export const DataItem = styled.li`
  margin-bottom: 10px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  span {
    font-weight: bold;
  }
  &::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 10px;
    background-color: ${(props) => props.color};
  }
`;
