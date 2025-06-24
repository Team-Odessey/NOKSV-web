import { MainContentsBox } from '@src/styles/globalStyles';
import * as S from './style';
import { useSearch } from '@src/hooks/search/useSearch';
import NokTextInput from '@src/components/common/ui/NokTextInput';
import GuildItem from '@src/components/guild/GuildItem';
import { GUILD } from '@src/constants/dummy/guild.dummy';

const GuildPage = () => {
  const {searchData, handleChangeSearchInput} = useSearch();
  return (
    <MainContentsBox>
      <S.GuildHeader>
        길드
        <NokTextInput placeholder='길드 검색' value={searchData} handleChange={handleChangeSearchInput}/>
      </S.GuildHeader>
      <S.GuildItemContainer>
        {GUILD.map(item => (
          <GuildItem data={item}/>
        ))}
      </S.GuildItemContainer>
    </MainContentsBox>
  )
}

export default GuildPage