import React from "react";
import { Route, Routes } from "react-router";
import Login from "@pages/Login";
import SignUp from "@pages/SignUp";
import Main from "@pages/Main";
import ModifyExamPaper from "@pages/ModifyExamPaper";
import CreatePaperList from "@pages/CreatePaperList";
import ExamPaper from "@components/ExamPaper";

function App() {
  return (
    <Routes>
      <Route exact path="/" to="/login" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route exact path="/main" element={<Main />}></Route>
      <Route
        path="main/examPaperList/:examTypeId/create"
        element={<CreatePaperList />}
      ></Route>
      <Route path="/main/examPaper/:id" element={<ExamPaper />} />
      <Route
        path="main/examPaper/:examPaperListId/modify"
        element={<ModifyExamPaper />}
      ></Route>
    </Routes>
  );
}

export default App;
