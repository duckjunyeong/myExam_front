import React, { useState, useMemo, useEffect } from "react";
import {
  TableWrapper,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TimeLabel,
  TableCell,
  TypeSelector,
  TypeButton,
  DashboardContainer,
  Header,
  Title,
  Buttons,
  Button,
  ChartContainer,
  ChartTitle,
  StatsContainer,
  StatItem,
  StatValue,
  StatLabel,
  PopularityContainer,
  PopularityTitle,
} from "@components/Content_EditTimeTable/styles";
import { useParams } from "react-router";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import "react-toastify/dist/ReactToastify.css";

import useGetTimeType from "@hooks/GetData/calendar/useGetTimeType";
import useGetSchedule from "@hooks/GetData/calendar/useGetSchedule";
import TimeTableChart from "@components/TimeTableChart";

const WatchTimeTable = () => {
  const { date } = useParams();
  const { data: userData } = useSWR("/api/user", fetcher);

  const { data: timeType } = useGetTimeType(
    date ? date : null,
    userData ? userData.id : null
  );
  const { data: propSchedule } = useGetSchedule(
    date ? date : null,
    userData ? userData.id : null
  );
  const [schedule, setSchedule] = useState(propSchedule || {});
  const [userTypes, setUserTypes] = useState(timeType || []);

  const hours = 24;
  const minutesPerSlice = 10;
  const slicesPerHour = 60 / minutesPerSlice;

  const timeSlices = useMemo(() => {
    const slices = [];
    for (let i = 0; i < hours * slicesPerHour; i++) {
      const hour = Math.floor(i / slicesPerHour);
      const minute = (i % slicesPerHour) * minutesPerSlice;
      const formattedTime = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      slices.push(formattedTime);
    }
    return slices;
  }, [hours, slicesPerHour]);

  useEffect(() => {
    setSchedule(propSchedule || {});
  }, [propSchedule]);

  useEffect(() => {
    setUserTypes(timeType || []);
  }, [timeType]);

  if (!userData || !userTypes) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <DashboardContainer>
        <Header>
          <Title>Time Table</Title>
          <Buttons>
            <Button>
              <i className="fas fa-envelope"></i>
            </Button>
            <Button>
              <i className="fas fa-envelope"></i>
            </Button>
            <Button>
              <i className="fas fa-search"></i>
            </Button>
            <Button>
              <i className="fas fa-cog"></i>
            </Button>
          </Buttons>
        </Header>
        <ChartContainer>
          <ChartTitle>Today Time Record</ChartTitle>
          <TypeSelector>
            {userTypes?.map((type) => (
              <TypeButton key={type.name} color={type.color}>
                {type.name}
              </TypeButton>
            ))}
          </TypeSelector>
          <TableWrapper>
            <TableContainer>
              <TableHeader>
                <TableHeaderCell>시간</TableHeaderCell>{" "}
              </TableHeader>
              <TableBody>
                {timeSlices?.map((time) => (
                  <TableRow key={time}>
                    <TableCell>
                      <TimeLabel>{time}</TimeLabel>
                    </TableCell>
                    <TableCell key={time} color={schedule[time]?.color} />
                  </TableRow>
                ))}
              </TableBody>
            </TableContainer>
          </TableWrapper>
        </ChartContainer>
        <StatsContainer>
          <StatItem>
            <StatValue>3,545</StatValue>
            <StatLabel>Tweets</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>254</StatValue>
            <StatLabel>Favorites</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>167</StatValue>
            <StatLabel>Retweets</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>79</StatValue>
            <StatLabel>Replies</StatLabel>
          </StatItem>
        </StatsContainer>
        <PopularityContainer>
          <PopularityTitle>Time Ratio</PopularityTitle>
          <TimeTableChart schedule={schedule} userTypes={userTypes} />
        </PopularityContainer>
      </DashboardContainer>
    </div>
  );
};

export default WatchTimeTable;
