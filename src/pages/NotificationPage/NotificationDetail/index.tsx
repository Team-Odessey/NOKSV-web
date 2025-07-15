import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import NokButton from "@src/components/common/ui/NokButton";
import * as S from './style';
import { exchangeNoticeTag } from "@src/utils/exchangeText/exchangeNoticeTag";
import { useGetAllNotices, useGetNoticeByName } from "@src/queries/notice/notice.query";
import dayjs from "dayjs";

const NotificationDetail = () => {
  const nav = useNavigate();
  const params = useParams();
  const { data: AllNotice } = useGetAllNotices();
  const { data } = useGetNoticeByName(+params.id!)

  return (
    <S.NotificationDetailContainer>
      공지사항
      <S.NotificationDetailMain>
        <section>
          <div>
            <span>{exchangeNoticeTag(data?.type)}</span>
            {data?.title}
            <time>{data?.createdAt}</time>
          </div>
          <ReactMarkdown>
            {data?.content}
          </ReactMarkdown>
        </section>
        <S.NotificationSidebar>
          <NokButton
            isFilled
            text="목록으로 돌아가기"
            width="100%"
            height="36px"
            onClickFn={() => nav("/notification")}
          />
          이전 공지
          {AllNotice?.sort((a, b) => dayjs(b.createdAt).diff(dayjs(a.createdAt))).slice(0, 5).map(item => (
            <S.NotificationNewItem to={`/notification/${item.id}`} key={item.id}>
              {exchangeNoticeTag(item.type)}
              <p>{item.title}</p>
            </S.NotificationNewItem>
          ))}
        </S.NotificationSidebar>
      </S.NotificationDetailMain>
    </S.NotificationDetailContainer>
  )
}


export default NotificationDetail