import { NOTIFICATION, NotificationType } from "@src/constants/dummy/notification.dummy"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import NokButton from "@src/components/common/ui/NokButton";
import * as S from './style';
import { exchangeNoticeTag } from "@src/utils/exchangeText/exchangeNoticeTag";

const NotificationDetail = () => {
  const nav = useNavigate();
  const params = useParams();
  const [detailData, setDetailData] = useState<NotificationType>();
  
  useEffect(() => {
    if (params.id) {
      setDetailData(NOTIFICATION.find(item => item.id === +params.id!))
    }
  }, [params])

  return (
    <S.NotificationDetailContainer>
      공지사항
      <S.NotificationDetailMain>
        <section>
          <div>
            <span>{exchangeNoticeTag(detailData?.tag)}</span>
            {detailData?.title}
            <time>{detailData?.writeAt}</time>
          </div>
          <ReactMarkdown>
            {detailData?.content}
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
          {NOTIFICATION.sort((a, b) => b.id - a.id).slice(0, 5).map(item => (
            <S.NotificationNewItem to={`/notification/${item.id}`} key={item.id}>
              {exchangeNoticeTag(item.tag)}
              <p>{item.title}</p>
            </S.NotificationNewItem>
          ))}
        </S.NotificationSidebar>
      </S.NotificationDetailMain>
    </S.NotificationDetailContainer>
  )
}


export default NotificationDetail