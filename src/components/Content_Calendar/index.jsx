import React, { useState, useMemo, useCallback } from "react";
import {
  CalendarContainer,
  CalendarHeader,
  CalendarTitle,
  CalendarBody,
  CalendarWeek,
  CalendarDay,
  CalendarDayLabel,
  PrevButton,
  NextButton,
} from "./styles";

import { useNavigate } from "react-router";
import fetcher from "@utils/fetcher";
import useSWR from "swr";
import TimeTableChart from "@components/TimeTableChart";

const Content_Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const { data: userData } = useSWR("/api/user", fetcher);
  const { data: monthlyData } = useSWR(
    userData
      ? `/api/schedules/monthly/${currentYear}/${currentMonth}/${userData.id}`
      : null,
    fetcher
  );
  console.log(monthlyData);
  const navigate = useNavigate();
  // 달력 생성을 위한 함수
  const generateCalendar = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const weeks = Math.ceil((firstDay + daysInMonth) / 7);

    let day = 1;
    let calendar = [];

    for (let i = 0; i < weeks; i++) {
      let week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || day > daysInMonth) {
          week.push(null);
        } else {
          week.push(day++);
        }
      }
      calendar.push(week);
    }

    return calendar;
  };

  // 이전 달로 이동하는 함수
  const goToPreviousMonth = () => {
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 0) {
        setCurrentYear((prevYear) => prevYear - 1);
        return 11;
      } else {
        return prevMonth - 1;
      }
    });
  };

  // 다음 달로 이동하는 함수
  const goToNextMonth = () => {
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 11) {
        setCurrentYear((prevYear) => prevYear + 1);
        return 0;
      } else {
        return prevMonth + 1;
      }
    });
  };

  // 날짜 클릭 핸들러
  const handleDateClick = (year, month, day) => {
    const date = new Date(year, month, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let mode = "isWatchMode";
    if (date.getTime() === today.getTime()) {
      mode = "isEditMode";
    }

    setSelectedDate(date);
    navigate(`/main/timeTable/${date}/${mode}`);
  };

  // 선택된 날짜의 포맷된 문자열 (YYYY-MM-DD)
  const formattedSelectedDate = useMemo(() => {
    if (!selectedDate) return null;
    const year = selectedDate.getFullYear();
    const month = (selectedDate.getMonth() + 1).toString().padStart(2, "0");
    const day = selectedDate.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }, [selectedDate]);

  const isLastDay = useCallback(
    (day) => {
      if (!day) {
        return false;
      }

      const curDate = new Date();
      const curYear = curDate.getFullYear();
      const curMonth = curDate.getMonth();
      const curDay = curDate.getDate();

      if (curYear > currentYear) {
        return true;
      } else if (currentYear < currentYear) {
        return false;
      }

      if (curMonth > currentMonth) {
        return true;
      } else if (curMonth < currentMonth) {
        return false;
      }

      if (curDay > day) {
        return true;
      }
    },
    [currentYear, currentMonth]
  );

  const calendar = generateCalendar();

  return (
    <div>
      <CalendarContainer>
        <CalendarHeader>
          <PrevButton onClick={goToPreviousMonth}>이전 달</PrevButton>
          <CalendarTitle>
            {currentYear}년 {currentMonth + 1}월
          </CalendarTitle>
          <NextButton onClick={goToNextMonth}>다음 달</NextButton>
        </CalendarHeader>
        <CalendarBody>
          <CalendarWeek>
            {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
              <CalendarDay key={day}>
                <CalendarDayLabel>{day}</CalendarDayLabel>
              </CalendarDay>
            ))}
          </CalendarWeek>
          {calendar.map((week, index) => (
            <CalendarWeek key={index}>
              {week.map((day, index) => (
                <CalendarDay
                  key={index}
                  onClick={() =>
                    day && handleDateClick(currentYear, currentMonth, day)
                  }
                  isLastday={isLastDay(day)}
                  isSelected={
                    selectedDate &&
                    selectedDate.getFullYear() === currentYear &&
                    selectedDate.getMonth() === currentMonth &&
                    selectedDate.getDate() === day
                  }
                >
                  {day && <CalendarDayLabel>{day}</CalendarDayLabel>}
                </CalendarDay>
              ))}
            </CalendarWeek>
          ))}
        </CalendarBody>
      </CalendarContainer>
      <TimeTableChart schedule={monthlyData} />
    </div>
  );
};

export default Content_Calendar;
