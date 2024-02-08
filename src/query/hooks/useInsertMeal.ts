import { useMutation } from "@tanstack/react-query";

import { FoodToInsert, insertMeal } from "@/src/utils/services";
import { invalidateQueriesWithDelay } from "../QueryProvider";

type MutationResponse = {
  status: boolean;
  payload: {
    id: string;
  };
};

const useInsertMeal = ({
  foods,
  mealTime,
  date
}: {
  foods: FoodToInsert[];
  mealTime: string;
  date: Date;
}) => {
  const { mutate, isPending, isSuccess } = useMutation<
    MutationResponse,
    Error,
    {
      foods: any;
      mealTime: string;
      date: Date;
    }
  >({
    mutationFn: insertMeal,
    onError: (error) => {
      console.error("Error inserting meal:", error);
    },
    onSuccess: () => {
      console.log("Meal inserted successfully");
    },
    onSettled: () => {
      invalidateQueriesWithDelay({
        queryKey: ["meals"],
      });
    },
  });

  return {
    insertMeal: () => mutate({ foods, mealTime, date }),
    isPending,
    isSuccess,
  };
};

export default useInsertMeal;
