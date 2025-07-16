import { RankRes } from "@src/types/ranking/ranking.type";
import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { QUERY_KEYS } from "../queryKey";
import { UserRankENUM } from "@src/types/user/user.type";
import rankingApi from "@src/api/ranking/ranking.api";

export const useGetRankByCategory = (
  category: UserRankENUM,
  options?: UseQueryOptions<RankRes[], AxiosError>
): UseQueryResult<RankRes[], AxiosError> =>
  useQuery<RankRes[], AxiosError>(
    QUERY_KEYS.rank.getRankByCategory(category),
    () => rankingApi.getRankByCategory(category),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      suspense: true,
      ...options,
    }
  );
