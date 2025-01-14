import fetcher from "@utils/fetcher";
import useSWR from "swr";

const useGetExamPaper = (examPaperListId) => {
  const { data, error, mutate } = useSWR(
    `/api/examPaper/${examPaperListId}`,
    fetcher
  );

  return { data, error, mutate };
};

export default useGetExamPaper;
