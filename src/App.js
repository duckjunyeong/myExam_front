import React from "react";
import { Route, Routes } from "react-router";
import Login from "@pages/Login";
import SignUp from "@pages/SignUp";
import Main from "@pages/Main";
import ModifyExamPaper from "@pages/ModifyExamPaper";
import CreatePaperList from "@pages/CreatePaperList";
import ExamPaper from "@pages/ExamPaper";
import ExamPaperResult from "@pages/ExamPaperResult";
import Content_ExamTypeList from "@components/Content_ExamTypeList";
import Content_Calendar from "@components/Content_Calendar";
import Content_StopWatch from "@components/Content_StopWatch";
import Content_TimeTable from "@components/Content_TimeTable";

function App() {
  return (
    <Routes>
      <Route exact path="/" to="/login" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route exact path="/main" element={<Main />}>
        <Route path="examTypeList" element={<Content_ExamTypeList />} />
        <Route path="calendar" element={<Content_Calendar />}></Route>
        <Route
          path="timeTable/:date/:mode"
          element={<Content_TimeTable />}
        ></Route>
        <Route path=":date/stopWatch" element={<Content_StopWatch />}></Route>
      </Route>
      <Route
        path="main/examPaperList/:examTypeId/create"
        element={<CreatePaperList />}
      ></Route>
      <Route path="/main/examPaper/:id" element={<ExamPaper />} />
      <Route
        path="main/examPaper/:examPaperListId/modify"
        element={<ModifyExamPaper />}
      ></Route>
      <Route
        path="examPaper/:examPaperListId/exam"
        element={<ExamPaper />}
      ></Route>
      <Route
        path="examPaper/:examPaperListId/examResult"
        element={<ExamPaperResult />}
      ></Route>
    </Routes>
  );
}

export default App;
