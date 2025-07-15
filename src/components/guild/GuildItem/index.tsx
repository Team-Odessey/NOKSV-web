import * as S from './style'
import GuildImage from '../GuildImage';
import { GuildRes } from '@src/types/guild/guild.type';

interface GuildItemProps {
  data: GuildRes;
}

const GuildItem = ({data}: GuildItemProps) => {
  return (
    <S.GuildItemContainer to={`${data.name}`}>
      <GuildImage imageName={'oak_wook'}/>
      <S.GuildItemData>
        <S.GuildItemHeader>
          [{data.name}]
          <p>{`${data.level}Lv • ${data.members.length}명`}</p>
        </S.GuildItemHeader>
        {data.description}
      </S.GuildItemData>
    </S.GuildItemContainer>
  )
}

export default GuildItem