import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ExamPaper = () => {
  const { id } = useParams();
  const [examProblems, setExamProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExamProblems = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/examPaper/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setExamProblems(data);
      } catch (error) {
        console.error("Error fetching exam problems:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchExamProblems();
  }, [id]);

  if (loading) {
    return <div>Loading exam problems...</div>;
  }

  if (error) {
    return <div>Error loading exam problems: {error.message}</div>;
  }

  return (
    <div>
      <h1>Exam Paper</h1>
      {examProblems.length > 0 ? (
        <ul>
          {examProblems.map((problem) => (
            <li key={problem.id}>
              <p>문제: {problem.title}</p>
              <p>정답: {problem.correct}</p>
              <p>선택지: {problem.choice}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No exam problems found for this paper.</p>
      )}
    </div>
  );
};

export default ExamPaper;
