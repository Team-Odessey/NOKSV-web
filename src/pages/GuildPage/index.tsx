import { MainContentsBox } from '@src/styles/globalStyles';
import * as S from './style';
import { useInputBar } from '@src/hooks/InputBar/useInputBar';
import NokTextInput from '@src/components/common/ui/NokTextInput';
import GuildItem from '@src/components/guild/GuildItem';
import { useGetAllGuilds } from '@src/queries/guild/guild.query';

const GuildPage = () => {
  const {inputData, handleChangeInput} = useInputBar();
  const { data } = useGetAllGuilds();
  return (
    <MainContentsBox>
      <S.GuildHeader>
        길드
        <NokTextInput placeholder='길드 검색' value={inputData} handleChange={handleChangeInput}/>
      </S.GuildHeader>
      <S.GuildItemContainer>
        {data?.filter(item => item.name.includes(inputData)).map(item => (
          <GuildItem data={item}/>
        ))}
      </S.GuildItemContainer>
    </MainContentsBox>
  )
}

export default GuildPage