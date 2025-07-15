import { GuildType } from '@src/constants/dummy/guild.dummy'
import * as S from './style'
import BaseGuildImg from '@src/assets/baseguildimg.png';

interface GuildItemProps {
  data: GuildType;
}

const GuildItem = ({data}: GuildItemProps) => {
  return (
    <S.GuildItemContainer to={`${data.name}`}>
      <img src={data.guildImage || BaseGuildImg} alt="guild img" />
      <S.GuildItemData>
        <S.GuildItemHeader>
          [{data.name}]
          <p>{`${data.level}Lv • ${data.personCount}명`}</p>
        </S.GuildItemHeader>
        {data.discription}
      </S.GuildItemData>
    </S.GuildItemContainer>
  )
}

export default GuildItem