import useSWR from "swr";
import fetcher from "@utils/fetcher";

const useGetTimeType = (date, userDataId) => {
  const { data, error, mutate } = useSWR(
    date && userDataId ? `/api/timeType/${date}/${userDataId}` : null,
    fetcher
  );

  return { data, error, mutate };
};

export default useGetTimeType;
