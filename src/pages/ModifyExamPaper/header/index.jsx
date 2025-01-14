import React from "react";
import { Header, BackButton, BackIcon, ChangelogTitle } from "./styles";

const ModifyExamPaperHeader = ({ examPaperInfo, navigate }) => {
  return (
    <Header>
      <BackButton onClick={() => navigate(-1)}>
        <BackIcon />
      </BackButton>
      <ChangelogTitle>
        {examPaperInfo ? (
          examPaperInfo[0].title + " - " + examPaperInfo[1].title
        ) : (
          <div>no data</div>
        )}
      </ChangelogTitle>
      <button onClick={() => navigate("/main")}>메인으로 이동</button>
    </Header>
  );
};

export default ModifyExamPaperHeader;
