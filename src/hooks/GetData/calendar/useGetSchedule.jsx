import useSWR from "swr";
import fetcher from "@utils/fetcher";

const useGetSchedule = (date, userDataId) => {
  const { data, error, mutate } = useSWR(
    date && userDataId ? `/api/timeTable/${date}/${userDataId}` : null,
    fetcher
  );
  return { data, error, mutate };
};

export default useGetSchedule;
