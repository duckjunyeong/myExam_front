import React, { useEffect, useCallback, useRef, useState } from "react";
import axios from "axios";
import { Title, TimeDisplay, Label, Button } from "./styles";
import { toast } from "react-toastify";
import { useParams } from "react-router";

const StopWatch = ({ userId, timeTypeId }) => {
  const { date } = useParams();
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const onClickStart = useCallback(() => {
    setIsRunning(true);
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();

    const time = `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;

    setStartTime(time);
  }, [setStartTime]);

  const onClickPause = useCallback(async () => {
    setIsRunning(false);
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();

    const time = `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;

    setEndTime(time);

    await axios
      .post(`api/${date}/stopWatch/create`, {
        userId,
        timeTypeId,
        timeRange: [startTime, time],
      })
      .then(() => toast.success("시간이 기록되었습니다."))
      .catch(() => toast.error("시간기록을 실패하였습니다."));
  }, [setEndTime, startTime, endTime]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsRemaining((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setSecondsRemaining(3600); // 초기값으로 재설정
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        if (isRunning) {
          onClickPause();
        } else {
          onClickStart();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isRunning, startTime, endTime]); // isRunning, start, pause를 의존성 배열에 추가

  const hours = Math.floor(secondsRemaining / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;

  return (
    <>
      <Title>Timer</Title>
      <TimeDisplay>
        <Label>Hours</Label>
        <Label>Minutes</Label>
        <Label>Seconds</Label>
        <br />
        <span>{hours.toString().padStart(2, "0")}:</span>
        <span>{minutes.toString().padStart(2, "0")}:</span>
        <span>{seconds.toString().padStart(2, "0")}</span>
      </TimeDisplay>
      <Button onClick={isRunning ? onClickPause : onClickStart}>
        {isRunning ? "Pause" : "Start"}
      </Button>
    </>
  );
};

export default StopWatch;
