import { MainContentsBox } from '@src/styles/globalStyles';
import * as S from './style';
import { useInputBar } from '@src/hooks/InputBar/useInputBar';
import NokTextInput from '@src/components/common/ui/NokTextInput';
import GuildItem from '@src/components/guild/GuildItem';
import { GUILD } from '@src/constants/dummy/guild.dummy';

const GuildPage = () => {
  const {inputData, handleChangeInput} = useInputBar();
  return (
    <MainContentsBox>
      <S.GuildHeader>
        길드
        <NokTextInput placeholder='길드 검색' value={inputData} handleChange={handleChangeInput}/>
      </S.GuildHeader>
      <S.GuildItemContainer>
        {GUILD.filter(item => item.name.includes(inputData)).map(item => (
          <GuildItem data={item}/>
        ))}
      </S.GuildItemContainer>
    </MainContentsBox>
  )
}

export default GuildPage