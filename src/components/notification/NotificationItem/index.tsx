import { nokPalette } from "@src/constants/color/color.constants"
import { NotificationType } from "@src/constants/dummy/notification.dummy"
import { nokTypograpy } from "@src/constants/font/font.constants"
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

interface NotificationItemProps {
  data: NotificationType;
}

const NotificationItem = ({
  data,
}: NotificationItemProps) => {
  return (
    <NoticeItemContainer to={`${data.id}`}>
      <NoticeMain>
        <header>
          <span>{data.tag === "patch" ? "패치노트" : "공지사항"}</span>
          <p>{data.title}</p>
        </header>
        <ReactMarkdown>
          {data.content.length >= 100 ? data.content.substring(0, 100) + ".." : data.content}
        </ReactMarkdown>
      </NoticeMain>
      {data.writeAt}
    </NoticeItemContainer>
  )
}
const NoticeItemContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 320px;
  padding: 12px;
  border-radius: 8px;
  gap: 12px;
  width: 100%;
  color: ${nokPalette.labelAlternative};
  ${nokTypograpy.Pretendard.Caption1.Medium};
  cursor: pointer;
`

const NoticeMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${nokPalette.labelNormal};
  ${nokTypograpy.Pretendard.Body2.Medium};
  header {
    display: flex;
    flex-direction: column;
    gap: 2px;
    p {
      color: ${nokPalette.labelNormal};
      ${nokTypograpy.Pretendard.Heading2.Bold};
    }
    span {
      color: ${nokPalette.labelAlternative};
      ${nokTypograpy.Pretendard.Label.Medium};
    }
  }
`
export default NotificationItem