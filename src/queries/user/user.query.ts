import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { QUERY_KEYS } from "../queryKey";
import userApi from "@src/api/user/user.api";
import { AxiosError } from "axios";
import { UserInfoRes } from "@src/types/user/user.type";

export const useGetMyData = (
  options?: UseQueryOptions<UserInfoRes, AxiosError>
): UseQueryResult<UserInfoRes, AxiosError> =>
  useQuery<UserInfoRes, AxiosError>(
    QUERY_KEYS.user.getUserMe,
    () => userApi.getMyData(),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      suspense: true,
      ...options,
    }
  );