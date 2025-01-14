import React from "react";
import Content_EditTimeTable from "@components/Content_EditTimeTable";
import Content_WatchTimeTable from "@components/Content_WatchTimeTable";
import { useParams } from "react-router";

const Content_TimeTable = () => {
  const { mode } = useParams();

  const isEditMode = mode === "isEditMode";

  return (
    <Content_EditTimeTable></Content_EditTimeTable>
    //<>{isEditMode ? <Content_EditTimeTable /> : <Content_WatchTimeTable />}</>
  );
};

export default Content_TimeTable;
