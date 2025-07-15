import noticeApi from "@src/api/notice/notice.api";
import { NoticeRes } from "@src/types/notice/notice.type";
import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { QUERY_KEYS } from "../queryKey";

export const useGetAllNotices = (
  options?: UseQueryOptions<NoticeRes[], AxiosError>
): UseQueryResult<NoticeRes[], AxiosError> =>
  useQuery<NoticeRes[], AxiosError>(
    QUERY_KEYS.notice.getAllNotice,
    () => noticeApi.getAllNotice(),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      suspense: true,
      ...options,
    }
  );

export const useGetNoticeByName = (
  id: number,
  options?: UseQueryOptions<NoticeRes, AxiosError>
): UseQueryResult<NoticeRes, AxiosError> =>
  useQuery<NoticeRes, AxiosError>(
    QUERY_KEYS.notice.getNoticeById(id),
    () => noticeApi.getNotice(id),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      suspense: true,
      ...options,
    }
  );
