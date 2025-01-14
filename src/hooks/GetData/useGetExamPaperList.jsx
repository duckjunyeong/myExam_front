import fetcher from "@utils/fetcher";
import useSWR from "swr";

const useGetExamPaperInfo = (examTypeListId) => {
  const { data, error, mutate } = useSWR(
    `/api/examPaper/${examTypeListId}/info`,
    fetcher
  );

  return { data, error, mutate };
};

export default useGetExamPaperInfo;
