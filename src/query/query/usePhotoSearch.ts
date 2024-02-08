import { fetchSearchFoodByImage } from "@/src/utils/services";
import { useQuery } from "@tanstack/react-query";

const usePhotoSearch = (image: string, onProgress: (progress: number) => void) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["photoSearch", image],
    queryFn: () => fetchSearchFoodByImage(image, onProgress),
    staleTime: 0,
  });

  return { result: data?.data, isLoading, error };
};

export default usePhotoSearch;
