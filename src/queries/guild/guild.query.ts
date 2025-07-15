import guildApi from "@src/api/guild/guild.api";
import { GuildRes } from "@src/types/guild/guild.type";
import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { QUERY_KEYS } from "../queryKey";

export const useGetAllGuilds = (
  options?: UseQueryOptions<GuildRes[], AxiosError>
): UseQueryResult<GuildRes[], AxiosError> =>
  useQuery<GuildRes[], AxiosError>(
    QUERY_KEYS.guild.getAllGuild,
    () => guildApi.getAllGuild(),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      suspense: true,
      ...options,
    }
  );

export const useGetNoticeByName = (
  name: string,
  options?: UseQueryOptions<GuildRes, AxiosError>
): UseQueryResult<GuildRes, AxiosError> =>
  useQuery<GuildRes, AxiosError>(
    QUERY_KEYS.guild.getGuildById(name),
    () => guildApi.getGuild(name),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      suspense: true,
      ...options,
    }
  );
