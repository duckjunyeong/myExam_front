import fetcher from "@utils/fetcher";
import useSWR from "swr";

const useGetExamResult = (examPaperListId) => {
  const { data, error, mutate } = useSWR(
    `api/examPaper/${examPaperListId}/examResult`,
    fetcher
  );

  return { data, error, mutate };
};

export default useGetExamResult;
