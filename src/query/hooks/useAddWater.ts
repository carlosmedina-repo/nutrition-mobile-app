import { WATER_API } from "@/src/constants/Api";
import fetchWithToken from "@/src/utils/fetch";
import { useMutation } from "@tanstack/react-query";
import { _queryClient } from "../QueryProvider";

export type ResponseType = {
  date: Date;
  daily_intakes: DailyIntake[];
  daily_total: number;
};

export type DailyIntake = {
  createdAt: Date;
  ml?: number;
};

const fetchAddWater = async ({
  amount,
  date,
}: {
  amount: number;
  date: Date;
}): Promise<ResponseType> => {
  const body = JSON.stringify({ ml: amount, createdAt: date });

  const response = await fetchWithToken(WATER_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await response.json();

  return data;
};

const useAddWater = () => {
  const { data, error, mutate } = useMutation<
    ResponseType,
    unknown,
    number,
    unknown
  >({
    mutationFn: (amount: number) => fetchAddWater({ amount }),

    onMutate: async (amount) => {},

    onError: (error, amount, context) => {},

    onSuccess: (data, amount, context) => {},

    onSettled: (data, error, amount, context) => {
      //invalidate the "water" query
      _queryClient.invalidateQueries("water");
    },
  });

  return { data, error, mutate };
};

export default useAddWater;
