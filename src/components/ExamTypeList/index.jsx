import React, { useState, useCallback, memo } from "react";
import {
  Section,
  SectionTitle,
  SectionContent,
} from "@components/ExamTypeList/styles";

import ExamPaperList from "@components/ExamPaperList";

const ExamTypeList = memo(({ examTypeList }) => {
  console.log("ExamTypeList 리렌더링!!");
  const [showExamPaper, setShowExamPaper] = useState(false);
  const [closeExamPaper, setCloseExamPaper] = useState(false);
  const [curExamTypeId, setCurExamTypeId] = useState(null);

  const onClickExamType = useCallback((index) => {
    try {
      setShowExamPaper(true);
      setCurExamTypeId(index);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const onClickCloseExamList = useCallback(() => {
    setShowExamPaper(false);
    setCloseExamPaper(true);
  }, []);

  return examTypeList.map((data, index) => {
    return (
      <>
        <Section
          className="personal"
          key={data.id}
          onClick={() => {
            onClickExamType(index);
          }}
        >
          <SectionTitle>
            <span></span>
            <span>computer science</span>
            <span>{new Date(data.createdAt).toLocaleDateString("ko-KR")}</span>
          </SectionTitle>
          <SectionContent>
            <p>{data.title}</p>
          </SectionContent>
        </Section>

        {showExamPaper && (
          <ExamPaperList
            closeModal={onClickCloseExamList}
            examType={examTypeList[curExamTypeId]}
          />
        )}
      </>
    );
  });
});

export default ExamTypeList;