import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetProduct = (path) => {
  return useQuery({
    queryKey: ["product", path],
    queryFn: () => request.get(`/${path}`).then((res) => res.data),
  });
};
