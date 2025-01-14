import React, { useCallback, useEffect, useState } from "react";
import { Container } from "./styles";

import {
  TypeSelector,
  TypeButton,
  SelectedTypeIndicator,
} from "@components/Content_EditTimeTable/styles";

import { useParams } from "react-router";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import useGetTimeType from "@hooks/GetData/calendar/useGetTimeType";
import StopWatch from "@components/StopWatch";
import { ToastContainer } from "react-toastify";

const Content_StopWatch = () => {
  const { date } = useParams();
  const { data: userData } = useSWR("/api/user", fetcher);
  const { data: timeType } = useGetTimeType(
    date ? date : null,
    userData ? userData.id : null
  );
  const [userTypes, setUserTypes] = useState(timeType);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    setUserTypes(timeType);
  }, [timeType]);

  const handleTypeClick = useCallback((type) => {
    setSelectedType(type);
  }, []);

  if (!userTypes) {
    return <div>loading....</div>;
  }
  return (
    <>
      <Container>
        <ToastContainer autoClose={1000} />
        <TypeSelector>
          {userTypes.map((type) => (
            <TypeButton
              key={type.name}
              color={type.color}
              onClick={() => handleTypeClick(type)}
            >
              {type.name}
            </TypeButton>
          ))}
        </TypeSelector>
        <SelectedTypeIndicator color={selectedType?.color}>
          현재 선택된 타입: <span>{selectedType?.name || "없음"}</span>
        </SelectedTypeIndicator>
        <StopWatch userId={userData.id} timeTypeId={selectedType?.id} />
      </Container>
    </>
  );
};

export default Content_StopWatch;
