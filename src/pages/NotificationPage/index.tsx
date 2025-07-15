import { useInputBar } from '@src/hooks/InputBar/useInputBar'
import * as S from './style'
import NotificationItem from '@src/components/notification/NotificationItem'
import NokTextInput from '@src/components/common/ui/NokTextInput'
import { useGetAllNotices } from '@src/queries/notice/notice.query'
import dayjs from 'dayjs'

const NotificationPage = () => {
  const {inputData, handleChangeInput} = useInputBar();
  const { data } = useGetAllNotices();

  return (
    <S.NotificationPageContainer>
      <div>
        공지사항
        <NokTextInput placeholder='공지사항 검색' value={inputData} handleChange={handleChangeInput}/>
      </div>
      {/* {data?.filter(item => item.title.includes(inputData)).length <= 0 && "공지가 없습니다"} */}
      <S.NotificationItemContainer>
        {data
        ?.sort((a, b) => dayjs(a.createdAt).diff(dayjs(b.createdAt)))
        .filter(item => item.title.includes(inputData))
        .map(item => (
          <NotificationItem data={item} key={item.id} />
        ))}
      </S.NotificationItemContainer>
    </S.NotificationPageContainer>
  )
}

export default NotificationPage