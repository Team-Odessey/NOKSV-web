import { useSearch } from '@src/hooks/search/useSearch'
import * as S from './style'
import { NOTIFICATION } from '@src/constants/dummy/notification.dummy'
import NotificationItem from '@src/components/notification/NotificationItem'

const NotificationPage = () => {
  const {searchData, handleChangeSearchInput} = useSearch();
  return (
    <S.NotificationPageContainer>
      <div>
        공지사항
        <input type='text' placeholder='공지사항 검색' value={searchData} onChange={handleChangeSearchInput}/>
      </div>
      {NOTIFICATION.filter(item => item.title.includes(searchData)).length <= 0 }
      <S.NotificationItemContainer>
        {NOTIFICATION
        .sort((a, b) => b.id - a.id)
        .filter(item => item.title.includes(searchData))
        .map(item => (
          <NotificationItem data={item} key={item.id} />
        ))}
      </S.NotificationItemContainer>
    </S.NotificationPageContainer>
  )
}

export default NotificationPage