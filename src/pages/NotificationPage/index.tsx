import { useInputBar } from '@src/hooks/InputBar/useInputBar'
import * as S from './style'
import { NOTIFICATION } from '@src/constants/dummy/notification.dummy'
import NotificationItem from '@src/components/notification/NotificationItem'
import NokTextInput from '@src/components/common/ui/NokTextInput'

const NotificationPage = () => {
  const {inputData, handleChangeInput} = useInputBar();
  return (
    <S.NotificationPageContainer>
      <div>
        공지사항
        <NokTextInput placeholder='공지사항 검색' value={inputData} handleChange={handleChangeInput}/>
      </div>
      {NOTIFICATION.filter(item => item.title.includes(inputData)).length <= 0 }
      <S.NotificationItemContainer>
        {NOTIFICATION
        .sort((a, b) => b.id - a.id)
        .filter(item => item.title.includes(inputData))
        .map(item => (
          <NotificationItem data={item} key={item.id} />
        ))}
      </S.NotificationItemContainer>
    </S.NotificationPageContainer>
  )
}

export default NotificationPage