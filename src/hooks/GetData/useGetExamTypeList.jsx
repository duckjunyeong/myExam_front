import fetcher from "@utils/fetcher";
import useSWR from "swr";

const useGetExamTypeList = (examTypeListId) => {
  const { data, error, mutate } = useSWR(
    `/api/examPaperList/${examTypeListId}`,
    fetcher
  );

  return { data, error, mutate };
};

export default useGetExamTypeList;
