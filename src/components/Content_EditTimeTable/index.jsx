import React, { useState, useMemo, useEffect, useCallback } from "react";
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
  TypeInput,
  SelectedTypeIndicator,
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
} from "./styles";
import { useParams, Link } from "react-router";
import axios from "axios";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useInput from "@hooks/useInput";
import useGetTimeType from "@hooks/GetData/calendar/useGetTimeType";
import useGetSchedule from "@hooks/GetData/calendar/useGetSchedule";
import TimeTableChart from "@components/TimeTableChart";
import BackUpModal from "@components/BackUpModal";

const EditTimeTable = () => {
  const { date } = useParams();
  const { data: userData } = useSWR("/api/user", fetcher);

  const { data: timeType } = useGetTimeType(
    date ? date : null,
    userData ? userData.id : null
  );
  const { data: propSchedule, mutate: propMutate } = useGetSchedule(
    date ? date : null,
    userData ? userData.id : null
  );
  const [schedule, setSchedule] = useState(propSchedule || {});
  const [userTypes, setUserTypes] = useState(timeType || []);
  const [newTypeName, onChangeNewTypeName, setNewTypeName] = useInput("");
  const [newTypeColor, onChangeNewTypeColor, setNewTypeColor] =
    useInput("#cccccc");
  const [selectedType, setSelectedType] = useState(null);
  const [willDeleteSchedule, setWillDeleteSchedule] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);
  useEffect(() => {
    setSchedule(propSchedule || {});
  }, [propSchedule]);

  useEffect(() => {
    setUserTypes(timeType || []);
  }, [timeType]);

  const onClickBackUp = useCallback(async () => {
    openModal();
    await axios
      .get(`/api/${date}/schedules/${userData.id}/backup/`)
      .then((response) => {
        setWillDeleteSchedule(response.data);
      })
      .catch((error) => console.error(error));
  }, [userData, date, openModal]);

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  const isTimeAhead = useCallback((time) => {
    const splitedTime = time.split(":");
    const hour = parseInt(splitedTime[0]);
    const minute = parseInt(splitedTime[1]);

    const date = new Date();
    const currentHour = date.getHours();
    const currentMinutes = date.getMinutes();

    if (
      hour > currentHour ||
      (hour === currentHour && minute >= currentMinutes)
    ) {
      return true;
    }
    return false;
  }, []);

  const handleCellClick = async (time) => {
    if (selectedType === null) {
      return toast.error("시간 타입을 선택해주세요");
    }

    if (isTimeAhead(time)) {
      return toast.error("미리 시간을 선택할 수 없습니다.");
    }

    if (schedule[time]?.color === selectedType.color) {
      return await axios
        .delete("/api/timeTable/delete", {
          data: {
            date,
            userId: userData.id,
            time,
          },
        })
        .then(() => propMutate());
    }
    const updatedSchedule = {
      ...schedule, // 이전 스케줄 데이터를 복사
      [time]: selectedType, // 클릭된 시간에 대한 정보만 업데이트
    };

    await axios
      .post("/api/timeTable/create", {
        date,
        time,
        timeTypeId: selectedType.id,
        userId: userData.id,
      })
      .then(() => {
        setSchedule(updatedSchedule); // TimeTable 내부 스케줄 상태 업데이트
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (!userData || !userTypes) {
    return <div>loading...</div>;
  }
  const handleAddType = async () => {
    if (newTypeName) {
      setUserTypes((prevTypes) => [
        ...prevTypes,
        { name: newTypeName, color: newTypeColor },
      ]);
      await axios.post("/api/timeType/create", {
        name: newTypeName,
        color: newTypeColor,
        date,
        userId: userData.id,
      });
      setNewTypeName("");
      setNewTypeColor("#cccccc");
    }
  };

  return (
    <div>
      <ToastContainer autoClose={1000} />
      {isModalOpen && (
        <BackUpModal
          willDeleteSchedule={willDeleteSchedule}
          onClose={closeModal}
          timeSlices={timeSlices}
          schedule={schedule}
          propMutate={propMutate}
        />
      )}
      <DashboardContainer>
        <Header>
          <Title>Time Table</Title>
          <Buttons>
            <Button>
              <Link to={`/main/${date}/stopWatch`}> Stop Watch </Link>
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
          <button onClick={onClickBackUp}> 되돌리기 </button>
          <ChartTitle>Today Time Record</ChartTitle>
          <TypeSelector>
            {userTypes?.map((type) => (
              <TypeButton
                key={type.name}
                color={type.color}
                onClick={() => handleTypeClick(type)}
              >
                {type.name}
              </TypeButton>
            ))}
            <TypeInput
              type="text"
              placeholder="새 타입 이름"
              value={newTypeName}
              onChange={onChangeNewTypeName}
            />
            <input
              type="color"
              value={newTypeColor}
              onChange={onChangeNewTypeColor}
            />
            <TypeButton color={newTypeColor} onClick={handleAddType}>
              추가
            </TypeButton>
          </TypeSelector>
          <SelectedTypeIndicator color={selectedType?.color}>
            현재 선택된 타입: <span>{selectedType?.name || "없음"}</span>
          </SelectedTypeIndicator>
          <TableWrapper>
            <TableContainer>
              <TableHeader>
                <TableHeaderCell>시간</TableHeaderCell>{" "}
                {/* 시간 헤더 셀 추가 */}
              </TableHeader>
              <TableBody>
                {timeSlices?.map((time) => (
                  <TableRow key={time}>
                    <TableCell
                      color={isTimeAhead(time) && "rgba(128, 128, 128, 0.1)"}
                    >
                      <TimeLabel>{time}</TimeLabel>
                    </TableCell>
                    <TableCell
                      key={time}
                      color={
                        isTimeAhead(time)
                          ? "rgba(128, 128, 128, 0.1)"
                          : schedule[time]?.color
                      }
                      onClick={() => handleCellClick(time)}
                    />
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
          <TimeTableChart schedule={schedule} />
        </PopularityContainer>
      </DashboardContainer>
    </div>
  );
};

export default EditTimeTable;
